import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public hoursArray: any = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
  ];
  public halfAnHourArray: any = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48
  ];
  public week: any = [
    {
      day: 'Пн',
      number: 8
    },
    {
      day: 'Вт',
      number: 9
    },
    {
      day: 'Ср',
      number: 10
    },
    {
      day: 'Чт',
      number: 11
    },
    {
      day: 'Пт',
      number: 12
    },
    {
      day: 'Сб',
      number: 13
    },
    {
      day: 'Вс',
      number: 14
    }
  ];

  public daysNames: any = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
  ];

  public month: any = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];

  public numberOfWeek: any = 1;

  constructor() {

  }

  ngOnInit() {
    this.generateWeek();
  }


  generateWeek() {
    this.week = [];
    this.month.slice((7 * this.numberOfWeek) - 7, 7 * this.numberOfWeek).forEach((elem, index) => {
      this.week.push({day: this.daysNames[index], number: elem});
    });
    console.log(this.week);
  }

  nextWeek() {
    this.numberOfWeek++;
    this.generateWeek();
  }

  prevWeek() {
    this.numberOfWeek--;
    this.generateWeek();
  }

}
