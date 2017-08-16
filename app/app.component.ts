import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentSelection}}</h3>
    <ul class="list-group">
       <li class="list-group-item" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of kegs"><span [class]="percentageColor(currentKeg)">{{currentKeg.name}}</span><span class="badge">{{currentKeg.percentage}}</span>
      <button class="pull-right" (click)="editKeg(currentKeg)">Edit!</button>
       </li>
     </ul>

     <hr>
             <div>
               <h3>{{selectedKeg.name}}</h3>
               <p>Keg Empty? {{selectedKeg.empty}}</p>
               <h3>Edit Keg</h3>
               <label>Enter Keg name:</label>
               <input [(ngModel)]="selectedKeg.name">
               <label>Enter Alcohol Percentage (3.9 - 5.9):</label>
               <br>
               <input type="radio" [(ngModel)]="selectedKeg.percentage" [value]="3.9">3.9(Low % Alc./Vol.)<br>
               <input type="radio" [(ngModel)]="selectedKeg.percentage" [value]="4.2">4.2 (Medium  % Alc./Vol.)<br>
               <input type="radio" [(ngModel)]="selectedKeg.percentage" [value]="5.9">5.9 (High  % Alc./Vol.)
            </div>
          </div>
  `
})

export class AppComponent {
  currentSelection: string = 'Summer Selection';
  kegs: Keg[] = [
    new Keg('LA TRAPPE QUADRUPEL', 5.9),
    new Keg('MURPHY’S IRISH', 4.2),
    new Keg('BLUE MOON BELGIAN', 3.9)
  ];
  selectedKeg: Keg = this.kegs[0];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }


    isEmpty(clickedKeg: Keg) {
      if(clickedKeg.empty === true) {
        alert("This keg is empty! Please replace.");
      } else {
        alert("This keg is full!");
      }
    }

percentageColor(currentKeg){
    if (currentKeg.percentage === 5.9){
      return "bg-danger";
    } else if (currentKeg.percentage === 4.2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  }


export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public percentage: number) { }
}
