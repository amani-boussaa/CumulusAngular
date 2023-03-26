import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaniUsersAllComponent } from './amani-users-all.component';

describe('AmaniUsersAllComponent', () => {
  let component: AmaniUsersAllComponent;
  let fixture: ComponentFixture<AmaniUsersAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaniUsersAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaniUsersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
