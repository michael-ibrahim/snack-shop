# SnackShop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Do not forget to run `npm install` to install the dependencies. 


## My Choices
* Eager Loading instead of Lazy Loading coz it is a small app (only 3 pages)
* The app has two services, `MenuService` which has the data of the menu items, and `BasketService` which holds all the information about the user's basket.
* Loading the data in a data service `MenuService` only once at init, and use the data all through the app lifetime.
* flag `data_is_ready` signals the loading of the data in `MenuService` .. Until the data is loaded, the components are not loaded. Instead, a loading prompt is displayed. See `app.component.html`
* Using `bootstrap` 4 for styling and responsivness