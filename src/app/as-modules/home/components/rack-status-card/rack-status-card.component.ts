import { Component, Input, OnInit } from '@angular/core';
import { RackStatus } from "../../models/rack-status";

@Component({
  selector: 'as-rack-status-card',
  templateUrl: './rack-status-card.component.html',
  styleUrls: ['./rack-status-card.component.scss']
})
export class RackStatusCardComponent implements OnInit {
@Input() rackStatus!: RackStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
