import { Component, OnInit, Input } from "@angular/core";
import { List } from "../_models/model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  list: List = {
    id: 1,
    title: "TODOs"
  };
  constructor() {}

  ngOnInit() {}
}
