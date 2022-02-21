import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { extensions } from "../../../as-shared/extensions/extensions";
import { Quantity } from "../../../as-shared/components/enums/quantity";
import { take } from "rxjs/operators";
import { LogEventsService } from "../services/log-events.service";
import { ApiErrorResponse } from "../../../as-shared/models/api-error-response";
import { ApiResponse } from "../../../as-shared/models/api-response";
import { RackStatus } from "../../home/models/rack-status";
import { RoomStatus } from "../../home/models/room-status";

@Component({
  selector: 'as-log-event-container',
  templateUrl: './log-event-container.component.html',
  styleUrls: ['./log-event-container.component.scss']
})
export class LogEventContainerComponent implements OnInit {
  public rackStatus!: RackStatus[];
  public roomStatus!: RoomStatus[];
  searchForm: FormGroup = new FormGroup({
    dateControl: new FormControl(),
    device: new FormControl()
  });

  constructor(private logEventService: LogEventsService) {
  }

  ngOnInit(): void {
    this.executeRackSearch(undefined, undefined);
    this.executeRoomSearch(undefined);
  }

  private handleErrorApiResponse(error: ApiErrorResponse): void {
    console.log(error)
  }

  private handleRackEventLogsApiResponse(response: ApiResponse<RackStatus[]>): void {
    this.rackStatus = response.body;
  }

  public searchRoom(): void {
    let date = this.searchForm.controls[ 'dateControl' ].value;

    if (date) {
      let formatDate = this.getFormatDate(date);
      this.executeRoomSearch(formatDate);

      return;
    }
    this.executeRoomSearch(undefined);

  }

  public searchRack(): void {
    let date = this.searchForm.controls[ 'dateControl' ].value;
    let deviceNumber = this.searchForm.controls[ 'device' ].value;
    let number = Quantity.Zero;
    if (date) {
      let formatDate = this.getFormatDate(date);
      if (deviceNumber) {
        number = deviceNumber
      }
      this.executeRackSearch(formatDate, number);

      return;
    }
    if (deviceNumber) {
      number = deviceNumber
    }

    this.executeRackSearch(undefined,number);
  }

  private getFormatDate(date: string): string {
    let newDate = extensions.stringEmpty();
    let splitDate = date.split('-', Quantity.Three);
    console.log(splitDate)
    for (let i = splitDate.length-1; i >= 0; i--) {
      newDate += splitDate[ i ];
      console.log(newDate);
      if (i !== Quantity.Zero) {
        newDate += '.';
      }
    }
    return newDate;
  }

  private executeRackSearch(date: string | undefined, deviceNumber: number | undefined): void {
    this.logEventService
      .getRackEventLogs(date, deviceNumber)
      .pipe(take(Quantity.One))
      .subscribe(response => this.handleRackEventLogsApiResponse(response), error => this.handleErrorApiResponse(error))
  }

  private executeRoomSearch(date: string | undefined) {
    this.logEventService
      .getRoomEventLogs(date)
      .pipe(take(Quantity.One))
      .subscribe(response => this.handleRoomEventLogsApiResponse(response), error => this.handleErrorApiResponse(error))

  }

  private handleRoomEventLogsApiResponse(response: ApiResponse<RoomStatus[]>) {
    this.roomStatus = response.body;
  }
}
