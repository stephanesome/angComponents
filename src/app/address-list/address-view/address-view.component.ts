import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressEntry} from '../address-entry';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-address-view',
    templateUrl: './address-view.component.html',
    styleUrls: ['./address-view.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class AddressViewComponent implements OnInit {
  @Input() address!: AddressEntry;
  @Output() fireDelete: EventEmitter<AddressEntry> = new EventEmitter();
  edit: boolean | undefined;

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.address);
  }
}
