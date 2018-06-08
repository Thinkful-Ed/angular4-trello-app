import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


//components
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { BoardListComponent } from './board-list/board-list.component';

import { BoardService } from './_services/board.service';


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
    BoardListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
