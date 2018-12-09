import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	item:any = {};

  constructor(
		public menuService: MenuService,
		private route: ActivatedRoute,
		public router: Router
	) {
	}

  ngOnInit() {
		this.load_item()
  }
	
	load_item(){
		var id = this.route.snapshot.params['id'];
		var items;
		this.menuService.get_menu().subscribe(data => {
			for(var item of data['items'])
			{
				if(item.id == id) this.item = item;
			}
		});
	}
	
	menu(){
		this.router.navigate(['']);
	}

}
