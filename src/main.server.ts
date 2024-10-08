import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { OrderPageComponent } from './app/order-page/order-page.component';
import { ProductPageComponent } from './app/product-page/product-page.component';
import { ProductListComponent } from './app/product-list/product-list.component';


const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
