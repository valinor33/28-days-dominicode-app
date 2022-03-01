import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-cities',
  template: `
    <ul class="list-group">
      <li
        class="list-group-item mt-1"
        (click)="onCitySelected(city)"
        [ngClass]="{ active: city?._id === selection?._id }"
      >
        {{ city.name | titlecase }}
        <button
          *ngIf="city?._id === selection?._id"
          type="button"
          class="btn btn-danger float-end"
          (click)="onCityDelete(city._id)"
        >
          Delete
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city!: City;
  @Input() selection!: City;
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(city: string): void {
    this.cityDeleteEvent.emit(city);
  }
}
