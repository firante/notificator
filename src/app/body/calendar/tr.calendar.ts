import { Component, Input } from '@angular/core';

@Component ({
    selector: 'tr-calendar',
    templateUrl: './tr.calendar.html',
    styleUrls: ['./tr.calendar.css']
})

export class TrCalendar {
  @Input() data: any;
  getData(): any {
    return this.data;
  }
}
