# felix-date-picker

## Demo
[Link](https://s3.amazonaws.com/public.inpwrd.com/assets/felix/date-picker-demo/index.html)

## Installation

```bash
$ npm install https://github.com/sergey-samusenko/felix-date-picker --save
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
