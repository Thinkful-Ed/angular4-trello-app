import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { List } from '../_models/model';
import { Card } from '../_models/model';
import { Routes, ActivatedRoute } from '@angular/router';
import { BoardService } from '../_services/board.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board = new Board();
  list = new List();
  lists: List[];
  submitted = false;

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
     this.boardService.getBoardById(params['id'])
       .subscribe(board => {
       console.log(board);
       this.board = board;
       this.lists = board['lists'];
      });
   });

  $('#body').css('background-color', 'rgb(0, 121, 191)');
   console.log($('#body'));
  }

submitForm = (boardId, listForm) => {
    this.submitted = true;
    console.log('here is the list', listForm);
    const new_list = new List();
    new_list.title = listForm.controls['title'].value;
    this.boardService.addList(boardId, new_list as List)
    .subscribe(list => {
      this.lists.push(list);
    });
  }
}
