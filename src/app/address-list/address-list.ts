import {Component, inject} from '@angular/core';
import {AddressEntry} from './address-entry';
import {NotificationService} from './notification-service';
import { AddressView } from './address-view/address-view';
import { AddressListElement } from './address-list-element/address-list-element';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.html',
  styleUrls: ['./address-list.css'],
  providers: [NotificationService],
  imports: [AddressListElement, AddressView]
})
export class AddressList {
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
