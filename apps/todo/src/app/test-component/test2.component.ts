import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [
    RouterModule,
    MatIconModule
  ],
  selector: 'app-test-2-component',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss',
})
export class Test2Component {
  constructor(protected router: Router) {
    
  }
  title = 'employee';
}
