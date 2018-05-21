import { Component, OnInit, Input } from '@angular/core';
import { List } from '../_models/model';
import { Card } from '../_models/model';
import { ListService } from '../_services/list.service';
import { CardService } from '../_services/card.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  @Input() list: List;
  lists: List[];
  cards: Card[];
  card = new Card();

  constructor(private listService: ListService, private cardService: CardService) { }

  ngOnInit() {
  console.log("it's a list", this.list);
  this.cards = this.list['cards'];
  }

  deleteList() {
    console.log(this.listService);
    this.listService.deleteList(this.list.id)
    .subscribe(list => {
      console.log(this);
    });
  }

  submitForm = (cardForm) => {
    let new_card = new Card();
    new_card.text = cardForm.form.value.text;
    this.cardService.addCard(new_card as Card, this.list)
    .subscribe(board => {
      this.cards.push(new_card);
    });

}
}
