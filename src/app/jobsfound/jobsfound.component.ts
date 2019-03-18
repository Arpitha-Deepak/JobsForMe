import { Component, OnInit, Input } from '@angular/core';
import { ListOfJobs } from '../shared/model/listOfJobs.model';

@Component({
  selector: 'app-jobsfound',
  templateUrl: './jobsfound.component.html',
  styleUrls: ['./jobsfound.component.css']
})
export class JobsfoundComponent implements OnInit {

  constructor() { }
  @Input() job: ListOfJobs;
  ngOnInit() {}

}
