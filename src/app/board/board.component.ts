import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { List } from '../_models/model';
import { Card } from '../_models/model';
import { Example } from '../test-data';

import * as $ from 'jquery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  board = Example;
  lists = this.board.lists;

  constructor() { }

  ngOnInit() {

  $('#body').css('background-color', 'rgb(0, 121, 191)');
   console.log($('#body'));
  }


}
