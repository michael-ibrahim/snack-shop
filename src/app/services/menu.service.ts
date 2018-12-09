import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

	data_is_ready:boolean;
	items:any=[];
	items_object:any={};

  constructor(private http: HttpClient){
		this.data_is_ready = false;				//initialize to false 
		this.get_menu();									//load menu data
	}
	
	//load menu data once per app load
	get_menu(){
		this.http.get("https://api.myjson.com/bins/z9s2i").subscribe((data:any) => {
		
			//filling items array
			this.items = data.items;
			
			//filling items object
			for(var item of this.items){
				this.items_object[item.id]=item;
			}
			
			//setting data_is_ready
			this.data_is_ready = true;
		});
	}
	
	//return a single item
	item(id){
		return this.items_object[id];
	}
	
}
