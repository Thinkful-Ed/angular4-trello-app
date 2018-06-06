import { Component, OnInit } from '@angular/core';
import { Board } from '../_models/model';
import { List } from '../_models/model';

import * as $ from 'jquery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board = {
    id: 1,
    name: "Personal Board"
  };
  constructor() {}

  ngOnInit() {}
}
