import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  sheetNumber:any;

  getData(data:any){
    console.log(data);
    this.sheetNumber = data.sheet_number
  }
}