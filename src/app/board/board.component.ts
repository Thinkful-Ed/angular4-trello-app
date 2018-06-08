import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { List } from '../_models/model';
import { Card } from '../_models/model';
import { BoardService } from '../_services/board.service';
import { Routes, ActivatedRoute } from '@angular/router';


import * as $ from 'jquery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  board = new Board();
  lists : List[];

  constructor(private route: ActivatedRoute, private boardService : BoardService ) { }


  ngOnInit() {
  this.route.params.subscribe(params => {
    this.board  = this.boardService.getBoardById(params['id'])
    this.lists = this.board['lists'];
  });

  $('#body').css('background-color', 'rgb(0, 121, 191)');
   console.log($('#body'));
  }


}
