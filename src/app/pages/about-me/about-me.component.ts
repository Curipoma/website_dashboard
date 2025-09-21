import { Component, inject, OnInit, signal } from '@angular/core';
import { IProject } from '@shared/projects/dom/models/i-project';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { IStagesData } from "@shared/stages/dom/models/i-stages.data";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  imports: [TranslateModule],
})
export class AboutMeComponent implements OnInit {
  protected readonly stagesData = signal<IStagesData>({});
  protected readonly projects = signal<IProject[]>([]);
  private readonly httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.getProjects();
    this.getStagesData();
  }

  getProjects(): void {
    this.httpClient
      .get<IProject[]>('data/projects.json')
      .subscribe((projects: IProject[]) => {
        this.projects.set(projects)
      });
  }

  getStagesData(): void {
    this.httpClient
      .get<IStagesData>('data/stages.json')
      .subscribe((stagesData: IStagesData) => {
        this.stagesData.set(stagesData)
      });
  }
}
