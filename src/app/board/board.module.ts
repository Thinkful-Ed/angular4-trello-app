import { NgModule } from '@angular/core';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardService } from './board.service';
import { RouterModule } from '@angular/router';
import { BoardRoutes } from './board.routing';
import { AppCoreModule } from '../core/core.module';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { CardService } from './card.service';
import { ListService } from './list.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(BoardRoutes)
  ],
  declarations: [
    BoardListComponent, BoardComponent, CardComponent, ListComponent
  ],
  exports: [
    BoardListComponent, BoardComponent, CardComponent, ListComponent
  ],
  entryComponents: [],
  providers: [
    BoardService, ListService, CardService
  ]
})
export class BoardModule { }
