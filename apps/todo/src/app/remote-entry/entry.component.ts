import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-todo-entry',
  template: `<app-nx-welcome-todo></app-nx-welcome-todo>`,
})
export class RemoteEntryComponent {}
