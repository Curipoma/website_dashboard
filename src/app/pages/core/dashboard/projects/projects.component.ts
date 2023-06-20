import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectModel} from "@models/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.httpClient
      .get<ProjectModel[]>('assets/data/projects.json')
      .subscribe((projects: ProjectModel[]) => (this.projects = projects));
  }
}
