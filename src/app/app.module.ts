import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FibonacciComponent } from './component/fibonacci/fibonacci.component';
import { TextAnalysisComponent } from './component/text-analysis/text-analysis.component';

@NgModule({
  declarations: [AppComponent, FibonacciComponent, TextAnalysisComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
