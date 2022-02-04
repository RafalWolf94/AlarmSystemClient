import { Component, OnInit } from '@angular/core';
import { LogEventsService } from "../services/log-events.service";
import { Quantity } from "../../../as-shared/components/enums/quantity";
import { take } from "rxjs/operators";
import { RackStatus } from "../../home/models/rack-status";
import { ApiResponse } from "../../../as-shared/models/api-response";
import { ApiErrorResponse } from "../../../as-shared/models/api-error-response";

@Component({
  selector: 'app-log-events',
  templateUrl: './log-events.component.html',
  styleUrls: ['./log-events.component.scss']
})
export class LogEventsComponent implements OnInit {
  public rackStatus!: RackStatus[];

  constructor(private logEventService: LogEventsService) {
  }

  ngOnInit(): void {
    this.logEventService
      .getRackEventLogs()
      .pipe(take(Quantity.One))
      .subscribe(response => this.handleRackEventLogsApiResponse(response), error => this.handleErrorApiResponse(error))
  }

  private handleErrorApiResponse(error: ApiErrorResponse): void {
    console.log(error)
  }

  private handleRackEventLogsApiResponse(response: ApiResponse<RackStatus[]>): void {
    this.rackStatus = response.body;
    console.log(this.rackStatus)
  }
}
