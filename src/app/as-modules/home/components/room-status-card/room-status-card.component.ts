import { Component, Input } from '@angular/core';
import { RoomStatus } from "../../models/room-status";

@Component({
  selector: 'as-room-status-card',
  templateUrl: './room-status-card.component.html',
  styleUrls: ['./room-status-card.component.scss']
})
export class RoomStatusCardComponent {
  @Input() public roomStatus!: RoomStatus[];



}
