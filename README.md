# felix-date-picker

Simple date picker for Angular. Development in progress.

## Demo
<a href="https://s3.amazonaws.com/public.inpwrd.com/assets/felix/date-picker-demo/index.html" target="_blank">Click here</a>

## Installation

```bash
$ npm install felix-date-picker
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FelixDatePickerModule } from "felix-date-picker";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FelixDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Usage

```html
<fx-date-picker [(startDate)]="startDate" [(endDate)]="endDate"></fx-date-picker>
```

## To do
- Clicks on dates may be buggy
- Fix mobile issues
- Add single date option
