import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { List } from '../_models/model';
import { Card } from '../_models/model';
import { Routes, ActivatedRoute } from '@angular/router';
import { BoardService } from '../_services/board.service';
import { ListService } from '../_services/list.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board = new Board();
  list = new List();
  lists: List[];

  constructor(private route: ActivatedRoute, private boardService: BoardService, private listService: ListService) { }

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
  submitForm = (listForm) => {
    let new_list = new List();
    new_list.title = listForm.form.value.title;
    console.log(new_list, this.board);
    this.listService.addList(new_list as List, this.board)
    .subscribe(board => {
      this.lists.push(new_list);
    });
  }
}
