import { Component, Input } from '@angular/core';
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    imports: [ListItemComponent]
})
export class ListComponent {
  @Input() name!: string;
  currentDay = new Date().toISOString();
}
