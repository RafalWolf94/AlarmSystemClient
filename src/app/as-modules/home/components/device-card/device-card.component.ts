import { Component, Input, OnInit } from '@angular/core';
import { DeviceStatus } from "../../models/deviceStatus";

@Component({
  selector: 'as-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {
  @Input() deviceStatus!: DeviceStatus;

  constructor() {
  }

  ngOnInit(): void {
  }

}
