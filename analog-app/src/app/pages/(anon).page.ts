import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'anon',
  standalone: true,
  imports: [RouterOutlet],
  styles: `
    .grid {
      width: 100%;
      height: 100vh;
      background: yellow;
      display: grid;
      grid-template-rows: 80px 1fr 80px;
      grid-template-columns: 300px 1fr;
    }

    .main-container: {
      background: yellow;
      border: 1px
      min-height: 800px;      
    }

    header {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      background: blue;
      color: white;
      font-weight: bold;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px;
    }

    aside {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      background: green;
      color: white;
      font-weight: bold;
    }

    main {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      background: grey;
      color: white;
      font-weight: bold;
    }

    footer {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      background: orange;
      color: white;
      font-weight: bold;
    }
  `,
  template: `
    <div class="grid">
      <header>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </header>
      <aside>Aside</aside>
      <main><router-outlet></router-outlet></main>
      <footer>Footer</footer>
    </div>
  `,
})
export default class AnonComponent {}
