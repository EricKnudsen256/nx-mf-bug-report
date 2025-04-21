import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from '../app/test-component/test.component';

@Component({
  imports: [RouterModule, TestComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'employee';
}
