import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentSelection}}</h3>
    <ul>
       <li>{{firstKeg.name}}</li>
     </ul>
  </div>
  `
})

export class AppComponent {
  currentSelection: string = 'Summer Selection';
  firstKeg = {
    name: "Budwiser"
  }
}
