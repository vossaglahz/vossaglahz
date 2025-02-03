import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent} from './components/child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  color: string = "green";

  changeColor(newColor: string) {
    this.color = newColor;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log("e", target.value);
  }
}
