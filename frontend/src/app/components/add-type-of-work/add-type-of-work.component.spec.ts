import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeOfWorkComponent } from './add-type-of-work.component';

describe('AddTypeOfWorkComponent', () => {
  let component: AddTypeOfWorkComponent;
  let fixture: ComponentFixture<AddTypeOfWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeOfWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
