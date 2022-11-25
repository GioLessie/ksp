import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  CATEGORIES: any[] = [
    {
      value: 'health',
      name: 'Salud'
    },
    {
      value: 'entertainment',
      name: 'Entretenimiento'
    },
    {
      value: 'science',
      name: 'Ciencia'
    },
    {
      value: 'sports',
      name: 'Deportes'
    },
    {
      value: 'technology',
      name: 'Tech'
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

  constructor() { }

  ngOnInit(): void {
  }

}
