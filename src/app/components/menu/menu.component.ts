import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	items:any;

  constructor(
		public menuService: MenuService,
		public router: Router
	){}

  ngOnInit() {
		this.menuService.get_menu().subscribe(data => this.items = data['items']); 
  }
	
	view_details(id){
		this.router.navigate(['item',id]);
	}

}
