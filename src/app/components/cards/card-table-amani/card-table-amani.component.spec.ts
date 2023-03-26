import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableAmaniComponent } from './card-table-amani.component';

describe('CardTableAmaniComponent', () => {
  let component: CardTableAmaniComponent;
  let fixture: ComponentFixture<CardTableAmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableAmaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTableAmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
