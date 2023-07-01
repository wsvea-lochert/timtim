export class week {
  private _days: string[];
  private _hours: number[];

  constructor() {
    this._days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this._hours = [];
  }

  get days() {
    return this._days;
  }

  get hours() {
    return this._hours;
  }

  set hours(hours: number[]) {
    this._hours = hours;
  }
  
}