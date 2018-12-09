import { Injectable } from '@angular/core';
import { MenuService } from "./menu.service";

@Injectable({
  providedIn: 'root'
})
export class BasketService { 

	basket:any=[];

  constructor(public menuService: MenuService) {}
	
	//Add an item to basket
	add_item(id){
		for(var item of this.basket){
			if(item.id == id){
				item.count = item.count += 1;
				item.price = this.menuService.item(id).price * item.count;
				return;
			}
		}
		this.basket.push({id:id,count:1,price:this.menuService.item(id).price});
	}
	
	//remove an item from basket
	remove_item(id){
		for(var i in this.basket){
			if(this.basket[i].id == id){		
				if(this.basket[i].count == 1){			//if count == 1, remove the item all together
					this.basket.splice(i,1);
				}
				else{																//if count > 1, just decrement the count
					this.basket[i].count = this.basket[i].count -= 1;
					this.basket[i].price = this.menuService.item(id).price * this.basket[i].count;
				}
				return;
			}
		}
	}
	
	//return the basket's total
	total_price(){
		var sum = 0;
		for (var item of this.basket){
			sum += item.price;
		} 
		return sum;
	}
	
}
