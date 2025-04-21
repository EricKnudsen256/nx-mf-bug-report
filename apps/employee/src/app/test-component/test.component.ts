import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    RouterModule,
    MatButtonModule
  ],
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(protected router: Router) {
    
  }
  title = 'employee';
}
