import { Injectable } from '@angular/core';
import { Board, List } from '../_models/model';
import { Observable } from 'rxjs/Rx';
import { Examples } from '../test-data';


@Injectable()
export class BoardService {
  constructor() {  }


  getBoards():  Board[]  {
    return Examples;
  }

  getBoardById(id):  Board {
    return Examples[id];
  }

}
