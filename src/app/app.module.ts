import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


//components
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';

//providers
import { BoardService } from './_services/board.service';
import { ListService } from './_services/list.service';
import { CardService } from './_services/card.service';
import { BaseService } from './_services/base.service';
import { BoardListComponent } from './board-list/board-list.component';


const appRoutes: Routes = [
  { path: 'board/:id', component: BoardComponent},
  { path: '', component: BoardListComponent},
  { path: '**',
    redirectTo: 'board-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ListComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
   ),
  ],
  providers: [
    BoardService,
    CardService,
    ListService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
