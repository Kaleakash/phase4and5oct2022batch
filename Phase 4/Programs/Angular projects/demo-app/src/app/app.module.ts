import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,MyChildComponent        // we have to provide all component details. 
  ],
  imports: [
    BrowserModule     // this module is reponsible to render the output on browser. 
  ],
  //providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
