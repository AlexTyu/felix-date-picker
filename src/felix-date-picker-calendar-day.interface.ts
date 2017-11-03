export interface CalendarDay {
  date:           Date;
  dayOfMonth:     number;
  month:          number;
  year:           number;
  dayOfWeek:      number;
  inRange:        boolean;
  firstInRange:   boolean;
  lastInRange:    boolean;
  inCurrentMonth: boolean;
}
