export class Card {
  id: number;
  text: string;
}

export class List {
  id: number;
  title: string;
  cards: Card[];
}

export class Board {
  id: number;
  name: string;
  lists: List[];
}
