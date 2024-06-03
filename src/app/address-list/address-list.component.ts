import {Component, inject} from '@angular/core';
import {AddressEntry} from './address-entry';
import {NotificationService} from './notification.service';
import { AddressViewComponent } from './address-view/address-view.component';
import { AddressListElementComponent } from './address-list-element/address-list-element.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.css'],
    providers: [NotificationService],
    standalone: true,
    imports: [NgIf, NgFor, AddressListElementComponent, AddressViewComponent]
})
export class AddressListComponent {
  addresses: AddressEntry[] = [];
  currentAddress: AddressEntry | null = null;
  notificationService: NotificationService = inject(NotificationService);

  select(address: AddressEntry): void {
    this.currentAddress = address;
    this.notificationService.selectionChanged(address);
  }

  addAddress(): void {
    const newAddress = new AddressEntry('New', 'Entry');
    this.addresses = [newAddress, ...this.addresses];
    this.select(newAddress);
  }

  deleteCurrent(): void {
    this.addresses = this.addresses.filter((address: AddressEntry) => address !== this.currentAddress);
    this.currentAddress = null;
  }
}
