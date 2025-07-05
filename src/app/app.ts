import { Component } from '@angular/core';
import { AddressList } from './address-list/address-list';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Header, AddressList]
})
export class App {
  title = 'address-book';
}
