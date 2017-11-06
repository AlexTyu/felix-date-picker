import { Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { CalendarView } from './felix-date-picker-calendar-view.interface';
import { CalendarViewComponent } from './calendar-view/calendar-view.component'

const CSS_CLASS_NAME: string = 'ng-date-range-picker';

export class FelixDatePickerViewComponent  {

    @ViewChild(CalendarViewComponent) calendarView: CalendarViewComponent;
    @ViewChild('container') container: ElementRef;

    private cssClass:   string = CSS_CLASS_NAME;
    private overlayRef: HTMLElement;
    private triggerRef: ElementRef;

    public  dates:      Date[];
    public  range:      boolean = false;
    public  open:       boolean = false;
    public  calendar:   CalendarView = {} as CalendarView;

    constructor(elementRef: ElementRef) {
        if (elementRef.nativeElement.tagName == "INPUT") {
            this.triggerRef = elementRef;
        }
    }

    public openMenu() {
        this.overlayRef.style.visibility = 'visible';
        this.overlayRef.style.zIndex = '10000';
    }

    public closeMenu() {
        this.overlayRef.style.visibility = 'hidden';
        this.overlayRef.style.zIndex = '-1';
        if (this.triggerRef) {
            this.triggerRef.nativeElement.value = this.dates[0];
        }
    }

    public init() {
        this.calendar = {} as CalendarView;
        if (this.triggerRef && this.dates) {
            this.triggerRef.nativeElement.value = this.dates[0];
        }
        this.assignEventListeners();
        this.applyDOMTransformations();
    }

    public onCalendarBack() {
        this.calendarView.goBack();
    }

    public onCalendarForward() {
        this.calendarView.goForward();
    }

    public getRootClass() {
        return CSS_CLASS_NAME;
    }

    public updateView() {
        this.calendarView.update();
        if (this.triggerRef) {
            this.triggerRef.nativeElement.value = this.dates[0];
        }
    }

    private assignEventListeners() {
        if (this.triggerRef) {
            this.triggerRef.nativeElement
                .addEventListener('click', () => this.openMenu())
        }
    }

    private applyDOMTransformations() {
        this.overlayRef = document.createElement('div');
        this.overlayRef.className = "felix-date-picker-overlay";
        this.overlayRef.appendChild(this.container.nativeElement);
        this.overlayRef.style.visibility = 'hidden';
        this.overlayRef.style.zIndex = '-1';
        document.body.appendChild(this.overlayRef);
    }


}
