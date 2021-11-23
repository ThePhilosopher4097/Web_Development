import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClubsComponent } from './user-clubs.component';

describe('UserClubsComponent', () => {
  let component: UserClubsComponent;
  let fixture: ComponentFixture<UserClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
