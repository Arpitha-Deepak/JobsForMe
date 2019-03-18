import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {SearchjobsComponent} from './searchjobs/searchjobs.component';
import {JobsfoundComponent} from './jobsfound/jobsfound.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SearchjobsComponent,
        JobsfoundComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jobsForMe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('jobsForMe');
  });

});
