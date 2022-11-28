import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employees-app';
  CATEGORIES: any[] = [
    {
      value: 'tech',
      name: 'Tech'
    },
    {
      value: 'rrhh',
      name: 'RRHH'
    },
    {
      value: 'management',
      name: 'Administración'
    },
    {
      value: 'general',
      name: 'General'
    },
    {
      value: 'business',
      name: 'Negocios'
    },
  ]
}
