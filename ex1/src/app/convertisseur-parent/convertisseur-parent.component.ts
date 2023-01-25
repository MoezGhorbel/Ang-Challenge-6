import { Component, importProvidersFrom, Input, OnInit, ViewChild } from '@angular/core';
import { ConvertisseurChildComponent } from '../convertisseur-child/convertisseur-child.component';


@Component({
  selector: 'app-convertisseur-parent',
  templateUrl: './convertisseur-parent.component.html',
  styleUrls: ['./convertisseur-parent.component.css']
})
export class ConvertisseurParentComponent  implements OnInit{
  
  public valueToConvert!: number;
  convertedValue: any;
  convertedV: any;

  @ViewChild (ConvertisseurChildComponent) covertisseurChild!: ConvertisseurChildComponent;

  OnClick() {
    this.convertedValue = this.covertisseurChild.convertValue(this.valueToConvert); 
  }

  Clicked (){
    this.covertisseurChild.Clicked();
  }
  convertedVs(kniz:any){
    this.convertedV = kniz;
  }

  ngOnInit(){
    console.log(this.covertisseurChild);
  }
}
