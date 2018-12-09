import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { BasketService } from "../../services/basket.service";
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	id:any;
	
  constructor(
		public menuService: MenuService,
		public basketService: BasketService,
		private route: ActivatedRoute,
		public router: Router
	){
		this.id = this.route.snapshot.params['id'];
	}

  ngOnInit() {}
	
	menu(){
		this.router.navigate(['menu']);
	}

}
