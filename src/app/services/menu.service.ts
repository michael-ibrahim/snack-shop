import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor(private http: HttpClient) {
	}
	
	get_menu() {
		return this.http.get("https://api.myjson.com/bins/z9s2i");
	}
	
}
