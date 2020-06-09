import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/services/burgers';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  burgersList: any;
  filterItem: any;
  catergory = ["All","Italian","Veg","Kashmiri","Chiness","Indian","Non-veg"];
  rating = ["All", 1, 2, 3, 4, 5];
  price = ["All", 100, 150, 200, 250, 300, 350, 400, 450, 500, 600];

  constructor(private burger: BurgerService) {}

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers() {
    this.burger.getBurgers().subscribe((burgers) => {
      this.burgersList = burgers["restaurants"];
      this.filterItem = this.burgersList;
    });
  }

  commonFilter(e, type) {
    let value = e.target.value;
    if (value == "All") this.filterItem = this.burgersList;
    let checkType = type === "raiting" ? "raiting" : "type";
    let checkDataType = type === "raiting" ? parseInt(value) : value;
    const filterItem = this.burgersList.filter((item) => item[checkType] === checkDataType);
    this.filterItem = filterItem;
  }

  filterByPrice(e) {
    if (e.target.value == "All") this.filterItem = this.burgersList;
    else {
    const filterPrice = this.burgersList.filter((item) => item.price < parseInt(e.target.value));
    this.filterItem = filterPrice;
    }
  }
}
