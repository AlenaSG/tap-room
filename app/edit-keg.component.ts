import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
   <div *ngIf="childSelectedKeg">
    <h3>{{childSelectedKeg.name}}</h3>
    <p>Keg Empty? {{childSelectedKeg.empty}}</p>
    <h3>Edit Keg</h3>
    <label>Enter Keg name:</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Enter Alcohol Percentage (3.9 - 5.9):</label>
    <br>
    <input type="radio" [(ngModel)]="childSelectedKeg.percentage" [value]="3.9">3.9(Low % Alc./Vol.)<br>
    <input type="radio" [(ngModel)]="childSelectedKeg.percentage" [value]="4.2">4.2 (Medium  % Alc./Vol.)<br>
    <input type="radio" [(ngModel)]="childSelectedKeg.percentage" [value]="5.9">5.9 (High  % Alc./Vol
    <br>
    <br>
    <button (click)="finishedEditing()">Done</button>

</div>
</div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;

}
