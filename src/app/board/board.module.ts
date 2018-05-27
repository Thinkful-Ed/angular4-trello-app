import { NgModule } from '@angular/core';
import { BoardListComponent } from './board-list.component';
import { BoardService } from './board.service';
import { RouterModule } from '@angular/router';
import { BoardRoutes } from './board.routing';
import { AppCoreModule } from '../core/core.module';
import { BoardComponent } from './board.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ListModule } from '../list/list.module';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ListModule,
    RouterModule.forRoot(BoardRoutes)
  ],
  declarations: [
    BoardListComponent, BoardComponent
  ],
  exports: [
    BoardListComponent, BoardComponent
  ],
  entryComponents: [],
  providers: [
    BoardService
  ]
})
export class BoardModule { }
