import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from "rxjs";
import { DeviceService } from "../../../../as-core/services/device.service";
import { takeUntil } from "rxjs/operators";
import { RoomStatus } from "../../models/room-status";
import { RackStatus } from "../../models/rack-status";

@Component({
  selector: 'as-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  public roomStatus: RoomStatus[]=[];
  public rackStatus: RackStatus[] = [];
  public notifier: Subject<never> = new Subject<never>();

  constructor(private deviceService: DeviceService) {
    this.deviceService.createHubConnection()

  }

  ngOnInit(): void {
    this.deviceService.roomStatus
      .pipe(takeUntil(this.notifier))
      .subscribe(response => this.handleRoomStatusSubmit(response))
    this.deviceService.rackStatus
      .pipe(takeUntil(this.notifier))
      .subscribe(response => this.handleRackStatusSubmit(response))
  }

  public ngOnDestroy(): void {
    this.notifier.next(null as never)
    this.notifier.complete();
  }

  private handleRackStatusSubmit(response: RackStatus) {
    if (this.rackStatus.some(x => x.deviceNumber === response.deviceNumber)) {
      let index = this.rackStatus.findIndex(x => x.deviceNumber === response.deviceNumber)
      this.rackStatus[ index ] = response;
      return;
    }
    this.rackStatus.push(response);

    console.log(this.rackStatus);
  }

  private handleRoomStatusSubmit(response: RoomStatus) {
    if (this.roomStatus.some(x => x.deviceNumber === response.deviceNumber)) {
      let index = this.roomStatus.findIndex(x => x.deviceNumber === response.deviceNumber)
      this.roomStatus[index] = response;
      return;
    }
    this.roomStatus.push(response);

    console.log(this.roomStatus);
  }

}
