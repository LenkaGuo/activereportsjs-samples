import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveReportsModule } from '@grapecity/activereports-angular';
import { ReportListComponent } from './report-list/report-list.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';

@NgModule({
  declarations: [AppComponent, ReportListComponent],
  imports: [ActiveReportsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
