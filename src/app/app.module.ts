import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnComponent } from './learn/learn.component';
import { FormsModule } from '@angular/forms';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    ClassComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
