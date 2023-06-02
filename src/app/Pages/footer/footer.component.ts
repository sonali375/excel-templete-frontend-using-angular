import { Component } from '@angular/core';


interface Sheet {
  name: string;
  content: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isClicked: boolean = false;
  isHovered: boolean = false;
  sheetNumber: number = 1;
  sheets: Sheet[] = [{ name: 'Sheet 1', content: 'Content for Sheet 1' }];
  selectedSheetContent: string = '';

  addSheet(): void {
    let sheetNumber = this.sheets.length + 1;

    // Find the maximum sheet number from the existing sheets
    const existingSheetNumbers = this.sheets.map(sheet => parseInt(sheet.name.split(' ')[1], 10));
    const maxSheetNumber = Math.max(...existingSheetNumbers);

    // Increment the sheet number until a unique one is found
    while (existingSheetNumbers.includes(sheetNumber)) {
      sheetNumber++;
    }

    const sheetName = `Sheet ${sheetNumber}`;
    this.sheets.push({ name: sheetName, content: `Content for ${sheetName}` });
  }

  selectSheet(index: number): void {
    const selectedSheet = this.sheets[index];
    this.selectedSheetContent = selectedSheet.content;
  }

  removeSheet(index: number): void {
    // Logic to remove the sheet from the sheets array
    this.sheets.splice(index, 1);
  }

  handleHover(isHovered: boolean): void {
    this.isHovered = isHovered;
  }
}
