import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/item/item.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
	{ path: '', redirectTo: 'menu', pathMatch: 'full'},
	{ path: 'menu', component: MenuComponent},
	{ path: 'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
