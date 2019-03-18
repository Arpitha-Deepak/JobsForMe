import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsfoundComponent } from './jobsfound.component';

describe('JobsfoundComponent', () => {
  let component: JobsfoundComponent;
  let fixture: ComponentFixture<JobsfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
