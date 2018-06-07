import { Board } from './_models/model';
import { Card } from './_models/model';
import { List } from './_models/model';

let todoCards : Card[] = [ { id : 1, text : "strawberries" }, {id : 2 , text : "blueberries"},{id : 3 , text : "milk"} ];
let todos : List = {id : 1, title : "shopping list", cards : todoCards};

export const Example : Board = { id: 1, name: 'TODOs', lists: [todos] };
