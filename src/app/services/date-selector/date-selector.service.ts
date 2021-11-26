import { Injectable } from '@angular/core';
import 'dayjs/locale/en-ca';
import 'dayjs/locale/fr-ca';
import * as dayjs from 'dayjs';

interface DateRange {
  startDate: Date | string;
  endDate: Date | string;
}

@Injectable({
  providedIn: 'root'
})
export class DateSelectorService {
  private periodSelection: 'week' | 'month' = 'week'; // will probably change this to num. days later
  private comparisonSelection: boolean = false; // for later, we can implement optional comparison

  public getPeriodSelection() {
    return this.periodSelection;
  }
  public setPeriodSelection(period: 'week' | 'month') {
    this.periodSelection = period;
  }

  public getComparisonSelection() {
    return this.comparisonSelection;
  }
  public setComparison(comparisonSelection: boolean) {
    this.comparisonSelection = comparisonSelection;
  }

  public getPeriod(periodType: 'current' | 'prior' | 'full' = 'current'): DateRange {
    // a rolling window would probably be more useful than this
    let periodEnd = dayjs().startOf(this.periodSelection).subtract(1, 'day');
    let periodStart = periodEnd.startOf(this.periodSelection);

    if (periodType === 'prior') {
      periodEnd = periodEnd.subtract(1, this.periodSelection);
      periodStart = periodStart.subtract(1, this.periodSelection);
    } else if (periodType === 'full') {
      periodStart = periodStart.subtract(1, this.periodSelection);
    }

    return {
      startDate: periodStart.toISOString(),
      endDate: periodEnd.toISOString(),
    };
  }

  public getFormattedDateRange() {
    const dateRange = this.getPeriod('full');

    return `${dateRange.startDate}/${dateRange.endDate}`;
  }

  public getDateUtils() {
    return dayjs;
  }

  constructor() { }
}
