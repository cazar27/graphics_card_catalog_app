import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { GraphicCard } from 'src/app/interfaces/graphic-card.interface';

@Component({
  selector: 'app-graphic-card-list-container',
  templateUrl: './graphic-card-list-container.component.html',
  styleUrls: ['./graphic-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicCardListContainerComponent implements OnInit {
  @Input() dataState: Observable<GraphicCard[]> = new Observable;
  @Input() data: GraphicCard[] = [];

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void { }

  public showDetail($event: any): void {
    this.router.navigate(['/graphics-cards', $event]);
  }

}
