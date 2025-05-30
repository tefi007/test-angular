import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
	imports: [RouterOutlet, Navbar],
  styleUrl: './app.scss'
})
export class App {
  protected title = 'test-angular';
}
