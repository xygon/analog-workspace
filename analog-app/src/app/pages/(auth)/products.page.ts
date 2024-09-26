import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Products</h1>
    <router-outlet></router-outlet>
  `,
})
export default class ProductsComponent {}
