import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMeetComponent } from './club-meet.component';

describe('ClubMeetComponent', () => {
  let component: ClubMeetComponent;
  let fixture: ComponentFixture<ClubMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
