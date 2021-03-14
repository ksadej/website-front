import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchstrapsComponent } from './watchstraps.component';

describe('WatchstrapsComponent', () => {
  let component: WatchstrapsComponent;
  let fixture: ComponentFixture<WatchstrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchstrapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchstrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
