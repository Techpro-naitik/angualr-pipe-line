import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('yes');

  selectedArrya = <any>[]


  users = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'London' },
    { name: 'Mike', age: 28, city: 'Delhi' },
    { name: 'Sara', age: 35, city: 'Mumbai' }
  ];

  selectedColumn = -1;

  highlightColumn(index: any) {

    if (this.selectedArrya.length > 0) {
        this.selectedArrya.find((res:any)=> console.log(res,"C") )
    }


    this.selectedColumn = index;

    this.selectedArrya.push(index)
    console.log(this.selectedArrya)
  }

  clearSelection() {
    this.selectedColumn = -1;
  }

}
