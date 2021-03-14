import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchstrapsListComponent } from './watchstraps-list.component';

describe('WatchstrapsListComponent', () => {
  let component: WatchstrapsListComponent;
  let fixture: ComponentFixture<WatchstrapsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchstrapsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchstrapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
