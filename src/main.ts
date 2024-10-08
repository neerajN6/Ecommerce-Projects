import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { OrderPageComponent } from './app/order-page/order-page.component';
import { ProductPageComponent } from './app/product-page/product-page.component';
import { ProductListComponent } from './app/product-list/product-list.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
