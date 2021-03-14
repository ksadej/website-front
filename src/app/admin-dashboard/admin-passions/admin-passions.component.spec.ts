import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPassionsComponent } from './admin-passions.component';

describe('AdminPassionsComponent', () => {
  let component: AdminPassionsComponent;
  let fixture: ComponentFixture<AdminPassionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPassionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPassionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
