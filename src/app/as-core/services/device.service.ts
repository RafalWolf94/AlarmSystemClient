import { Injectable } from '@angular/core';
import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { environment } from "../../../environments/environment";
import { Subject } from "rxjs";
import { DeviceStatus } from "../../as-modules/home/models/deviceStatus";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  public hubUrl = environment.hubUrl;
  private hubConnection!: HubConnection;
  public deviceStatus: Subject<DeviceStatus> = new Subject<DeviceStatus>()

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

    this.hubConnection.on('BroadcastMessage', response => this.deviceStatus.next(response))
  }
  public stopHubConnection() {
    this.hubConnection.start().catch(error => console.log(error));
  }

}
