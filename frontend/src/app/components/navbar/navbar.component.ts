import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = [
    {path: '/employees', name:'Сотрудники' },
    {path: '/positions', name:'Должности' },
    {path: '/customers', name:'Заказчики' },
    {path: '/typeOfWorks', name:'Виды работ' },
    {path: '/workOrders', name:'Заказы' }
  ];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
