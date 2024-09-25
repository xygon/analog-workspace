import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { AnalogWelcomeComponent } from "./analog-welcome.component";

@Component({
  selector: "analog-app-home",
  standalone: true,
  imports: [RouterLink, AnalogWelcomeComponent],
  template: `
    <analog-app-analog-welcome />
    <hr />
    <a routerLink="/about">Go to About</a>
  `,
})
export default class HomeComponent {}
