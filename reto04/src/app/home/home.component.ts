import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Día 04 del reto';
  url = "https://i.pinimg.com/564x/bd/e2/db/bde2db98b2b73987278cfb8f3f12f557.jpg"

  name !: string;
  // name = "valinor";
  selection !: string;
  criterio = "";

  cities = ['Barcelona', 'Madrid', 'Montevideo']

  onCityClicked(city: string): void {
    console.log(city);
    this.selection = city;
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onClear(): void {
    this.selection = '';
  }
}
