import {Component, OnInit} from '@angular/core';
import {ProjectModel} from "@models/core";
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements OnInit {
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
