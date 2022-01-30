import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceStatus } from "../../models/deviceStatus";
import { Subject } from "rxjs";
import { DeviceService } from "../../../../as-core/services/device.service";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'as-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  public deviceStatus: DeviceStatus[] = [];
  public notifier: Subject<never> = new Subject<never>();

  constructor(private deviceService: DeviceService) {
    this.deviceService.createHubConnection()

  }

  ngOnInit(): void {
    this.deviceService.deviceStatus
      .pipe(takeUntil(this.notifier))
      .subscribe(response => this.handleSubmit(response))
  }

  public ngOnDestroy(): void {
    this.notifier.next(null as never)
    this.notifier.complete();
  }

  private handleSubmit(response: DeviceStatus) {
    if (this.deviceStatus.some(x => x.deviceNumber === response.deviceNumber)) {
      let index = this.deviceStatus.findIndex(x => x.deviceNumber === response.deviceNumber)
      this.deviceStatus[ index ] = response;
    } else {
      this.deviceStatus.push(response);
    }
  }
}
