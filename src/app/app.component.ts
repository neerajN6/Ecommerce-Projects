import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(private route: Router) { }

  orderPage() {
    this.route.navigate(['order-page']);
  }
}
