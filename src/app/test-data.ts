import { Board } from './_models/model';
import { Card } from './_models/model';
import { List } from './_models/model';

let todoCards : Card[] = [ { id : 1, text : "strawberries" }, {id : 2 , text : "blueberries"},{id : 3 , text : "milk"} ];
let workCards : Card[] = [ { id : 1, text : "Dr Shibbert" }, {id : 2 , text : "Steven Holbert"},{id : 3 , text : "Stephanie Eggert"} ];
let schoolCards : Card[] = [ { id : 1, text : "Kimmy" }, {id : 2 , text : "Sara"},{id : 3 , text : "Katie"} ];

let todos : List = {id : 1, title : "shopping list", cards : todoCards};
let work : List = {id : 1, title : "work friends", cards : workCards};
let school : List = {id : 2, title : "school friends", cards : schoolCards};



export const Examples : Board[] = [
{ id: 0, name: 'TODOs', lists: [todos] },
{ id: 1, name: 'Contacts', lists: [work, school] }
];
