import { Injectable } from '@angular/core';
import { MenuService } from "./menu.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService { 

	basket:any=[];

  constructor(public menuService: MenuService) {}
	
	add_item(id){
		for(var item of this.basket){
			if(item.id == id){
				item.count = item.count += 1;
				item.price += this.menuService.item(id).price;
				return;
			}
		}
		this.basket.push({id:id,count:1,price:this.menuService.item(id).price});
	}
	
	remove_item(id){
		for(var i in this.basket){
			if(this.basket[i].id == id){
				if(this.basket[i].count == 1){
					this.basket.splice(i,1);
				}
				else{
					this.basket[i].count = this.basket[i].count -= 1;
					this.basket[i].price -= this.menuService.item(id).price;
				}
				return;
			}
		}
	}
	
	total_price(){
		var sum = 0;
		for (var item of this.basket){
			sum += item.price;
		} 
		return sum;
	}
	
}
