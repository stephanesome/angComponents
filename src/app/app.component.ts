import { Component } from '@angular/core';
import { AddressListComponent } from './address-list/address-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, AddressListComponent]
})
export class AppComponent {
  title = 'address-book';
}
