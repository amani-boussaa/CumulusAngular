import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileamanidetailComponent } from './profileamanidetail.component';

describe('ProfileamanidetailComponent', () => {
  let component: ProfileamanidetailComponent;
  let fixture: ComponentFixture<ProfileamanidetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileamanidetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileamanidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
