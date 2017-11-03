import { CalendarDay } from './felix-date-picker-calendar-day.interface';

export interface CalendarView {
  startDate:      Date;
  endDate:        Date;
  days:           CalendarDay[];
  month:          number;
  year:           number;
  displayVal:     string;
}
