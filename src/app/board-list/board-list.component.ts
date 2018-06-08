import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { BoardService } from '../_services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  board = new Board();
  boards: Board[];
  constructor(private boardService : BoardService) { }

  getBoards(): void {
    this.boards = this.boardService.getBoards();
  }


  ngOnInit() {
    this.getBoards();
  }

}
