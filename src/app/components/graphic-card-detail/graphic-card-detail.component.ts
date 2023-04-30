import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

import { GraphicCard } from 'src/app/interfaces/graphic-card.interface';
import { GraphicCardService } from 'src/app/services/graphic-card.service';

@Component({
  selector: 'app-graphic-card-detail',
  templateUrl: './graphic-card-detail.component.html',
  styleUrls: ['./graphic-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicCardDetailComponent implements OnInit {

  @Input() graphicCard: GraphicCard | undefined;
  @Output() buttonClicked = new EventEmitter<number>();
  public loadGraphicCards = false;

  constructor(
    private graphicCardsService: GraphicCardService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  public ngOnInit(): void {
    if(this.graphicCard === undefined) {
      this.route.params.subscribe(params => {
        const id = + params['id'];
        this.graphicCardsService.getGraphicCard(id).subscribe(data => {
          this.graphicCard = data;
        });
      });
    } else {
      this.loadGraphicCards = true;
    }
  }

  public onClick(id: number): void {
    this.buttonClicked.emit(id);
  }

  public goBack(): void {
    this.location.back();
  }
}
