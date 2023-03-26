import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileAmaniComponent } from './card-profile-amani.component';

describe('CardProfileAmaniComponent', () => {
  let component: CardProfileAmaniComponent;
  let fixture: ComponentFixture<CardProfileAmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfileAmaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfileAmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
