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
  constructor(private boardService: BoardService) { }

  getBoards(): void {
   this.boardService.getBoards()
     .subscribe(boards => {
     this.boards = boards["boards"];
     });
 }

 submitted = false;

 submitForm = (boardForm) => {
   this.submitted = true;
   console.log("here is the board", boardForm.form.value.name)
   let new_board = new Board();
   new_board.name = boardForm.form.value.name;
   this.boardService.addBoard(new_board as Board)
   .subscribe(board => {
     this.boards.push(board);
   });
 }

  ngOnInit() {
    this.getBoards();
  }

}
