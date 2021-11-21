import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstoreComponent } from './ustore.component';

describe('UstoreComponent', () => {
  let component: UstoreComponent;
  let fixture: ComponentFixture<UstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
