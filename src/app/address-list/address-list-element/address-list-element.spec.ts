import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListElement } from './address-list-element';

describe('AddressListElementComponent', () => {
  let component: AddressListElement;
  let fixture: ComponentFixture<AddressListElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AddressListElement]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressListElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
