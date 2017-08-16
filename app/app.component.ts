import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentSelection}}</h3>
    <ul>
       <li (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.name}}
       <button (click)="editTask()">Edit!</button>
       </li>
     </ul>
  </div>
  `
})

export class AppComponent {
  currentSelection: string = 'Summer Selection';
  kegs: Keg[] = [
    new Keg('LA TRAPPE QUADRUPEL'),
    new Keg('MURPHY’S IRISH'),
    new Keg('BLUE MOON BELGIAN')
  ];

  editTask() {
      alert("You just requested to edit a Keg!");
    }


    isEmpty(clickedKeg: Keg) {
      if(clickedKeg.empty === true) {
        alert("This keg is empty! Please replace.");
      } else {
        alert("This keg is full!");
      }
    }

  }


}

export class Keg {
  public empty: boolean = false;
  constructor(public name: string) { }
}
