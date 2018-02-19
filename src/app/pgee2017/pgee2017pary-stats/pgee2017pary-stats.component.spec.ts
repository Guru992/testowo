import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgee2017paryStatsComponent } from './pgee2017pary-stats.component';

describe('Pgee2017paryStatsComponent', () => {
  let component: Pgee2017paryStatsComponent;
  let fixture: ComponentFixture<Pgee2017paryStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pgee2017paryStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgee2017paryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
