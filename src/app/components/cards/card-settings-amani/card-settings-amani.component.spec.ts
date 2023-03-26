import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSettingsAmaniComponent } from './card-settings-amani.component';

describe('CardSettingsAmaniComponent', () => {
  let component: CardSettingsAmaniComponent;
  let fixture: ComponentFixture<CardSettingsAmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSettingsAmaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSettingsAmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
