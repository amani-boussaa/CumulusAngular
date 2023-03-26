import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaniUserUpdateComponent } from './amani-user-update.component';

describe('AmaniUserUpdateComponent', () => {
  let component: AmaniUserUpdateComponent;
  let fixture: ComponentFixture<AmaniUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaniUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaniUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
