import { Component, OnInit } from '@angular/core';
import { BasketService } from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(public basketService:BasketService) { }

  ngOnInit() {
  }

}
