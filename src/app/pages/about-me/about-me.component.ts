import { Component, inject, OnInit, signal } from '@angular/core';
import { IProject } from '@shared/projects/dom/models/i-project';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { IStagesData } from "@shared/stages/dom/models/i-stages.data";
import { FastAverageColor } from "fast-average-color";
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  imports: [TranslateModule, NgStyle],
})
export class AboutMeComponent implements OnInit {
  protected readonly stagesData = signal<IStagesData>({});
  protected readonly projects = signal<IProject[]>([]);
  private readonly httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.getProjects();
    this.getStagesData();
  }

  protected onLoadImg(imgEl: HTMLImageElement, i: number): void {
    const fac = new FastAverageColor();
    const color = fac.getColor(imgEl);
    this.projects.update(
      projects => {
        return [
          ...projects.map((project, index) => {
            if (index === i) {
              return {
                ...project,
                color: `rgba(${ color.value.slice(0, 3).join(',') }, 0.20)`,
              }
            }
            return project;
          }),
        ]
      }
    );
  }

  private getProjects(): void {
    this.httpClient
      .get<IProject[]>('data/projects.json')
      .subscribe((projects: IProject[]) => {
        this.projects.set(projects)
      });
  }

  private getStagesData(): void {
    this.httpClient
      .get<IStagesData>('data/stages.json')
      .subscribe((stagesData: IStagesData) => {
        this.stagesData.set(stagesData)
      });
  }
}
