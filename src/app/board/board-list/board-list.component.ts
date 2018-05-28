import { Component, OnInit } from '@angular/core';
import { Board } from '../model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  submitted = false;
  board = new Board();
  boards: Board[];
  constructor(private boardService: BoardService) { }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => {
        this.boards = boards['boards'];
      });
  }

  submitForm = (boardForm) => {
    this.submitted = true;
    console.log('here is the board', boardForm);
    const new_board = new Board();
    new_board.name = name;
    this.boardService.addBoard(new_board as Board)
      .subscribe(board => {
        this.boards.push(board);
      });
  }

  ngOnInit() {
    this.getBoards();
  }

}
