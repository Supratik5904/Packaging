import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstimatorComponentComponent } from './estimator-component/estimator-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoardComponentComponent } from './board-component/board-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EstimatorComponentComponent,
    NavbarComponent,
    BoardComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'packaging';
}
