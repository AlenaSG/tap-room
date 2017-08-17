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
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()" (reduceButtonClickedSender)="reduceVolume()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  currentSelection: string = 'Summer Selection';
  selectedKeg = null;
  volume = 124;


  masterKegList: Keg[] = [
    new Keg('LA TRAPPE QUADRUPEL', 5.9, 'dark', 8.0),
    new Keg('MURPHY’S IRISH', 4.2, 'dark', 9.0),
    new Keg('BLUE MOON BELGIAN', 3.9, 'light', 7.5)
  ];



  editKeg(clickedKeg) {
      this.selectedKeg = clickedKeg;
    }

  finishedEditing() {
      this.selectedKeg = null;
        }

  reduceVolume(){
    this.volume --;
    alert(this.volume);
    

  }

  addKeg(newKegFromChild: Keg) {
   this.masterKegList.push(newKegFromChild);
 }

}
