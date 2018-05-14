import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { List } from '../_models/model';
import { Card } from '../_models/model';
import { Routes, ActivatedRoute } from '@angular/router';
import { BoardService } from '../_services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board = new Board();
  list = new List();
  lists: List[];

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit(){
     this.route.params.subscribe(params => {
     this.boardService.getBoardById(params['id'])
       .subscribe(board => {
       console.log(board)
       this.board = board;
       this.lists = board['lists'];
      });
   });
  }
}
