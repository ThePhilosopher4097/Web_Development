import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubChatsComponent } from './club-chats.component';

describe('ClubChatsComponent', () => {
  let component: ClubChatsComponent;
  let fixture: ComponentFixture<ClubChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubChatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
