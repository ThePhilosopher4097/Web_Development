import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UStoreComponent } from './ustore.component';

describe('UStoreComponent', () => {
  let component: UStoreComponent;
  let fixture: ComponentFixture<UStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
