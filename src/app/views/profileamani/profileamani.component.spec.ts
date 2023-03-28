import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileamaniComponent } from './profileamani.component';

describe('ProfileamaniComponent', () => {
  let component: ProfileamaniComponent;
  let fixture: ComponentFixture<ProfileamaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileamaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileamaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
