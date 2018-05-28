import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { AppCoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppCoreModule,
    BoardModule // Must be tha last because have the wildcard route **
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
