import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressView } from './address-view';

describe('AddressViewComponent', () => {
  let component: AddressView;
  let fixture: ComponentFixture<AddressView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AddressView]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
