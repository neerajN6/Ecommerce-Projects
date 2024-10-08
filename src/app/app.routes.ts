import { Routes } from '@angular/router';
import { OrderPageComponent } from '../app/order-page/order-page.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "order-page", component: OrderPageComponent },
  { path: "cart", component: CartComponent },
  { path: "product-list", component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-product', component: AdminAddProductComponent },
  { path: 'admin-product', component: AdminProductListComponent },
  { path: 'admin-edit/:id', component: AdminEditProductComponent }

];
