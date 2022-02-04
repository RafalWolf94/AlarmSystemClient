import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input() public content!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
