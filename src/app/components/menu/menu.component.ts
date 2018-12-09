import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { BasketService } from "../../services/basket.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(
		public menuService: MenuService,
		public basketService: BasketService,
		public router: Router
	){}

  ngOnInit() {
		 
  }
	
	view_details(id){
		this.router.navigate(['item',id]);
	}
	
	basket(){
		this.router.navigate(['basket']);
	}

}
