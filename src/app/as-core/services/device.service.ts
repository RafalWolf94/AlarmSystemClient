import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { environment } from "../../../environments/environment";
import { Subject } from "rxjs";
import { RackStatus } from "../../as-modules/home/models/rack-status";
import { RoomStatus } from "../../as-modules/home/models/room-status";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public hubUrl = environment.hubUrl;
  private hubConnection!: HubConnection;
  public roomStatus: Subject<RoomStatus> = new Subject<RoomStatus>()
  public rackStatus: Subject<RackStatus> = new Subject<RackStatus>()

  constructor() {
  }

  public createHubConnection(){
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl +'device', {
        withCredentials: true,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start()
      .catch(error => console.log(error));

    this.hubConnection.on('BroadcastRoomStatus', response =>  this.handleRoomResponse(response))
    this.hubConnection.on('BroadcastRackStatus', response =>  this.handleRackResponse(response))
  }
  public stopHubConnection() {
    this.hubConnection.start().catch(error => console.log(error));
  }

  private handleRoomResponse(response: RoomStatus) {
    this.roomStatus.next(response)
  }

  private handleRackResponse(response: RackStatus) {
    this.rackStatus.next(response)
  }
}
