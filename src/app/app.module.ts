import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DirectusService } from './directus.service';
import { LanauvaApiService } from './lanauva-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DirectusService, LanauvaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
