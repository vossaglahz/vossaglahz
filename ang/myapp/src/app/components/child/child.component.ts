import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input('childColor') childColorProps!: string;
  @Input() name!: string;

  @Output() nameChange = new EventEmitter<string>();
}
