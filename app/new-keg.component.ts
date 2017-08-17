import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
     <label>Enter Keg name:</label>
     <input #newName>
    </div>
    <div>
     <label>Enter Keg type:</label>
     <input #newType>
    </div>
    <div>
     <label>Enter Keg price:</label>
     <input #newPrice>
    </div>
   <div>
    <label>Alcohol Percentage:</label>
    <select #newPercentage>
      <option [value]="3.9"> Low Percentage </option>
      <option [value]="4.2"> Medium Percentage </option>
      <option [value]="5.9"> High Percentage </option>
    </select>
    <button (click)="submitForm(newName.value, newPercentage.value, newType.value, newPriceKeg); newName.value='';">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  submitForm(name: string, percentage: number, type: string, price: number) {
      var newKegToAdd: Keg = new Keg(name, percentage, type, price);
      this.newKegSender.emit(newKegToAdd);
    }

}
