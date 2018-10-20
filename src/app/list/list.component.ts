import { Component, OnInit } from '@angular/core';
import { Offer } from '../interficies/offer'
import { offers } from '../interficies/mockofertas'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Offer[]

  constructor() {
    this.list = offers
 }

  ngOnInit() {
  }
}
