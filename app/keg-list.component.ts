import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul class="list-group">
     <li class="list-group-item" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList"><span [class]="percentageColor(currentKeg)">{{currentKeg.name}}</span><span class="badge">{{currentKeg.percentage}}</span>
    <button class="pull-right" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
     </li>
   </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

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

    editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
