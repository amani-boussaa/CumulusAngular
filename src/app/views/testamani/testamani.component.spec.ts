import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamaniComponent } from './testamani.component';

describe('TestamaniComponent', () => {
  let component: TestamaniComponent;
  let fixture: ComponentFixture<TestamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestamaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
