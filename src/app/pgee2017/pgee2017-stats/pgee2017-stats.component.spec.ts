import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgee2017StatsComponent } from './pgee2017-stats.component';

describe('Pgee2017StatsComponent', () => {
  let component: Pgee2017StatsComponent;
  let fixture: ComponentFixture<Pgee2017StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pgee2017StatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgee2017StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
