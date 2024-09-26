import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'analog-app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet>App Component</router-outlet> `,
})
export class AppComponent {}
