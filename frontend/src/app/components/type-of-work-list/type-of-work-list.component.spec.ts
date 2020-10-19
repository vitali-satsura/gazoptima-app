import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfWorkListComponent } from './type-of-work-list.component';

describe('TypeOfWorkListComponent', () => {
  let component: TypeOfWorkListComponent;
  let fixture: ComponentFixture<TypeOfWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfWorkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
