import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Observable, catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';

import { GraphicCard } from 'src/app/interfaces/graphic-card.interface';
import { GraphicCardService } from 'src/app/services/graphic-card.service';
import { AlertComponent } from '../alert/alert.component';
import { loadGraphicCards } from 'src/app/store/actions/graphic-card.actions';

@Component({
  selector: 'app-graphic-card-list-container',
  templateUrl: './graphic-card-list-container.component.html',
  styleUrls: ['./graphic-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicCardListContainerComponent implements OnInit {
  graphicCards: GraphicCard [] = [];
  graphicCards$: Observable<GraphicCard []> = new Observable;
  dataError: any;

  constructor(
    private graphicCardsService: GraphicCardService,
    private store: Store<{ graphicCard: GraphicCard[] }>,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getGraphicCards();
    this.graphicCards$ = this.store.select(state => state.graphicCard);
    this.store.dispatch(loadGraphicCards());
    // console.log(this.graphicCards$);
  }

  getGraphicCards(): void {
    this.graphicCardsService.getGraphicCards()
      .pipe(
        catchError((error: HttpErrorResponse) => {

          this.dataError = {
            title: 'Unknown error occurred!',
            desc: 'Descripción de la alerta'
          };
          if (error.error instanceof ErrorEvent) {
            // Client-side errors
            this.dataError.desc = `Error: ${error.error.message}`;
          } else {
            // Server-side errors
            this.dataError.desc = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.showAlert();
          return throwError(this.dataError.desc);
        })
    )
    .subscribe(data => {
      this.graphicCards = data;
    });
  }

  showAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: this.dataError.title,
        desc: this.dataError.desc
      }
    });
  }

  showDetail($event: any): void {
    this.router.navigate(['/graphics-cards', $event]);
  }

}
