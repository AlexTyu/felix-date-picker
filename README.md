# ng-daterangepicker

## Installation

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgDaterangepickerModule } from "ng-daterangepicker";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgDaterangepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Usage

```html
<app-ng-daterangepicker [(startDate)]="startDate" [(endDate)]="endDate"></app-ng-daterangepicker>
```
