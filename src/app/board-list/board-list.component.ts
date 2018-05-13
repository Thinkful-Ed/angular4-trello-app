import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/board';
import { BoardService } from '../_services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  board = new Board();
  boards: Boards[];
  constructor() { }

  getBoards(): void {
   this.boardService.getBoards()
     .subscribe(boards => this.boards = boards);
 }
  ngOnInit() {
    this.getBoards();
  }

}
