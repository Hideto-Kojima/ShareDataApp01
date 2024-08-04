import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <p>Welcome to Angular!</p>
    <a [routerLink]="['/']">InputPage Link</a>
    <section class="content">
        <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShareDataApp01';
}
