import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaplistComponent } from './caplist/caplist.component';
import { HttpClientModule } from '@angular/common/http';
import { CapdetailComponent } from './capdetail/capdetail.component';

@NgModule({
  declarations: [
    AppComponent,  
    CaplistComponent,
    CapdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
