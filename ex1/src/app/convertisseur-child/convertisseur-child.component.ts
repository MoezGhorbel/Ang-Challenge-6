import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-convertisseur-child',
  templateUrl: './convertisseur-child.component.html',
  styleUrls: ['./convertisseur-child.component.css']
})

// Method 1: Les setters

export class ConvertisseurChildComponent {
  @Input() public valueToConvert!: number;
  @Output() public convertedValue = new EventEmitter();

  

  convertValue(valeur:number) {
    const convertedValue = valeur * 2;
    // const convertedValue = this.valueToConvert * 2;
    // this.convertedValue.emit(convertedValue);
    return convertedValue;
  }

  Clicked (){
    const convertedValue = this.valueToConvert * 2;
    this.convertedValue.emit(convertedValue);
  }

}

// Method 2: ngOnChanges

// export class ConvertisseurChildComponent implements OnChanges {
//   @Input()
//   public valueToConvert!: number;
//   public convertedValue!: number;

//   ngOnChanges() {
//     this.convertedValue = this.valueToConvert * 2;
//   }
// }
