import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/item/item.component';
import { BasketComponent } from './components/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
