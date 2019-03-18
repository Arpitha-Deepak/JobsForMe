import { Component, OnInit } from '@angular/core';
import { ApplicantType } from '../shared/model/applicantType.model';
import { WebapiService } from '../shared/service/webapi.service';
import { ListOfJobs } from '../shared/model/listOfJobs.model';

@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.component.html',
  styleUrls: ['./searchjobs.component.css']
})
export class SearchjobsComponent implements OnInit {

  job: ListOfJobs;
  listOfJobs: ListOfJobs[];
  filteredlistOfJobs: ListOfJobs[];
  listOfJobAPILoading: boolean = true;

  applicantType: ApplicantType[] = [
    {id: 1, experienceType: 'Fresher'},
    {id: 2, experienceType: 'Experienced'}
  ]

  private _searchBySkills: string;
  get searchBySkills(): string {
    return this._searchBySkills;
  }

  set searchBySkills(value: string) {
    this._searchBySkills = value;
    this.filteredlistOfJobs = this.searchByskillsSet(this._searchBySkills);
  }

  private _sortexperience: string;
  get sortexperience() {
    return this._sortexperience;
  }

  set sortexperience(value: string) {
    this._sortexperience = value;
    this.filteredlistOfJobs = this.sortbyexperience(this._sortexperience);
  }

  explevel: string;
  jobs: any;
  private _location: string;
  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;  
  }

  constructor(private service: WebapiService) { }

  ngOnInit() {
    this.service.getlistofjobs().subscribe(joblist => {
        let myData = Object.values(joblist);
        this.listOfJobs = myData[0];
        this.listOfJobAPILoading = false;
        this.filteredlistOfJobs = this.listOfJobs;
        console.log('list of jobs' + this.listOfJobs);
      }
    )
  }

  filterjobsforfreshers(searchterm1: string) {
    return this.listOfJobs.filter(job =>
      (job.location.toLowerCase().indexOf(searchterm1.toLowerCase()) !== -1) && ((job.experience.indexOf('0') !== -1) || (job.experience == ""))
    )
  }

  filterjobsforexperienced(searchterm2: string) {
    return this.listOfJobs.filter(job =>
      (job.location.toLowerCase().indexOf(searchterm2.toLowerCase()) !== -1))
  }

  selectedExplevel(experience: string) {
    this.explevel = experience;
    console.log('exp level is' + this.explevel);
  }

  sortbyexperience(searchterm4: string) {
    return this.listOfJobs.filter(job =>
      job.experience.toLowerCase().indexOf(searchterm4.toLowerCase()) !== -1)
  }
  search() {
    if (this.explevel === 'Fresher') {
      this.filteredlistOfJobs = this.filterjobsforfreshers(this._location);
    } else {
      this.filteredlistOfJobs = this.filterjobsforexperienced(this._location);
    }
  }

  searchByskillsSet(searchterm3: string) {
    return this.listOfJobs.filter(job =>
      job.skills.toLowerCase().indexOf(searchterm3.toLowerCase()) !== -1)
  }

  back() {
    this.service.getlistofjobs().subscribe(joblist => {
        let myData = Object.values(joblist);
        this.listOfJobs = myData[0];
        this.filteredlistOfJobs = this.listOfJobs;
      }
    )
  }

}