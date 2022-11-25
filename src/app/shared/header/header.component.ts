import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
