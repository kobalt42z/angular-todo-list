import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
 
})
export class ListItemComponent {
  @Input({required:true}) title!: string;
  @Input() checked!: boolean;
  @Input() stared!: boolean;

}
