import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componentej2Component } from './componentej2/componentej2.component';
import { Componentej3Component } from './componentej3/componentej3.component';
import { Componentej4Component } from './componentej4/componentej4.component';
import { Componentej5Component } from './componentej5/componentej5.component';
import { Componentej6Component } from './componentej6/componentej6.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Componentej2Component, Componentej3Component, Componentej4Component, Componentej5Component, Componentej6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontendapp';
}
