import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
     <option value="allKegs">All Kegs</option>
     <option value="emptyKegs">Empty Kegs</option>
     <option value="fullKegs" selected="selected">Full Kegs</option>
   </select>



  <ul class="list-group">
     <li class="list-group-item" (click)="isEmpty(currentKeg)" *ngFor="let currentKeg of childKegList | completeness:filterByCompleteness"><span [class]="percentageColor(currentKeg)">{{currentKeg.name}}</span><span class="badge">{{currentKeg.percentage}}</span>

     <input *ngIf="currentKeg.empty === true" type="checkbox" checked (click)="toggleEmpty(currentKeg, false)"/>
      <input *ngIf="currentKeg.empty === false" type="checkbox" (click)="toggleEmpty(currentKeg, true)"/>

    <button class="pull-right" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
     </li>
   </ul>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "fullKegs";

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

    onChange(optionFromMenu) {
      this.filterByCompleteness = optionFromMenu;
    }

    toggleEmpty(clickedKeg: Keg, setCompleteness: boolean) {
         clickedKeg.empty = setCompleteness;
       }

    editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
