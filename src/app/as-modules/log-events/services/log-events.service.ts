import { Injectable } from '@angular/core';
import { ApiService } from "../../../as-core/services/http/api.service";
import { Observable } from "rxjs";
import { RackStatus } from "../../home/models/rack-status";
import { ApiEndpoints } from "../../../as-shared/components/configs/api-endpoints-config";
import { RoomStatus } from "../../home/models/room-status";
import { ApiResponse } from "../../../as-shared/models/api-response";
import { extensions } from "../../../as-shared/extensions/extensions";

@Injectable({
  providedIn: 'root'
})
export class LogEventsService {

  constructor(private apiService: ApiService) {
  }

  getRackEventLogs(date: string= extensions.stringEmpty(), deviceNumber: number = 0): Observable<ApiResponse<RackStatus[]>> {
    return this.apiService.get<ApiResponse<RackStatus[]>>(`${ApiEndpoints.getRackEventLogs}`, {date: date, deviceNumber: deviceNumber});
  }

  getRoomEventLogs(date: string | null): Observable<ApiResponse<RoomStatus[]>> {
    return this.apiService.get<ApiResponse<RoomStatus[]>>(`${ApiEndpoints.getRoomEventLogs}`, {date: date,});
  }
}
