import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Quantity } from "../../../as-shared/components/enums/quantity";
import { extensions } from "../../../as-shared/extensions/extensions";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  public search(): void {
    let date = this.myForm.controls[ 'name' ].value;
    let formatDate = this.getFormatDate(date);

    console.log(formatDate)

  }

  private getFormatDate(date: string): string {
    let newDate = extensions.stringEmpty();
    let splitDate = date.split('-', Quantity.Three);
    for (let i = splitDate.length - 1; i >= Quantity.Zero; i--) {
      newDate += splitDate[ i ];
      if (i !== Quantity.Zero) {
        newDate += '.';
      }
    }
    return newDate;
  }
}
