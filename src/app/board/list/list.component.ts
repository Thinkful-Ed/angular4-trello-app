import { Component, OnInit, Input } from '@angular/core';
import { List, Card } from '../model';
import { ListService } from '../list.service';
import { CardService } from '../card.service';

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

  constructor(private listService: ListService,
    private cardService: CardService) { }

  ngOnInit() {
    console.log('its a list', this.list);
    this.cards = this.list['cards'];
  }

  deleteList() {
    console.log(this.listService);
    this.listService.deleteList(this.list.id)
      .subscribe(list => {
        console.log(this);
      });
  }

  submitForm(cardForm) {
    const new_card = new Card();
    new_card.text = cardForm.form.value.text;
    this.cardService.addCard(new_card as Card, this.list)
      .subscribe(board => {
        this.cards.push(new_card);
      });

  }
}
