import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentsComponent} from './pages/home/components/components.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fpt-web';
}
