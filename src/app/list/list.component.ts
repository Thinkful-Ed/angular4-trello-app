import { Component, OnInit, Input } from "@angular/core";
import { List } from "../_models/model";
import { Card } from "../_models/model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() list: List;
  lists: List[];
  cards: Card[];
  card = new Card();

  constructor() {}

  ngOnInit() {
    console.log("it's a list", this.list);
    this.cards = this.list["cards"];
  }
}
