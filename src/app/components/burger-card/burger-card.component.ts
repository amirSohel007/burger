import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-burger-card',
  templateUrl: './burger-card.component.html',
  styleUrls: ['./burger-card.component.css']
})
export class BurgerCardComponent implements OnInit {
  @Input() burgers: Array<any>;
  search: any

  constructor() {}

  ngOnInit() {}

}
