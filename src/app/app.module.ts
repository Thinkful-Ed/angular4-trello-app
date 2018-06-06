import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//components
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
