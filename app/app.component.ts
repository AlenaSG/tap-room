import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentSelection}}</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
     <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
        </div>
  `
})

export class AppComponent {
  currentSelection: string = 'Summer Selection';
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('LA TRAPPE QUADRUPEL', 5.9),
    new Keg('MURPHY’S IRISH', 4.2),
    new Keg('BLUE MOON BELGIAN', 3.9)
  ];


  editKeg(clickedKeg) {
      this.selectedKeg = clickedKeg;
    }

  finishedEditing() {
      this.selectedKeg = null;
  }

}
