import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchjobsComponent } from './searchjobs.component';
import {JobsfoundComponent} from '../jobsfound/jobsfound.component';

describe('SearchjobsComponent', () => {
  let component: SearchjobsComponent;
  let fixture: ComponentFixture<SearchjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        SearchjobsComponent,
        JobsfoundComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
