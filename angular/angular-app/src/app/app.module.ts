import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelListComponent } from './label-list/label-list.component';
import { NgxAnnotateTextModule } from "ngx-annotate-text";

@NgModule({
  declarations: [
    AppComponent,
    LabelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAnnotateTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
