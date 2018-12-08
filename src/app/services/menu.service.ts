import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

	items:any=[];

  constructor(private http: HttpClient) {
		this.get_data();
	}
	
	get_data() {
		this.http.get("https://api.myjson.com/bins/z9s2i").subscribe((data: any) => {
			this.items = data.items;
    });
	}
	
}
