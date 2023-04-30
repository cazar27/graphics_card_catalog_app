import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, catchError, throwError } from 'rxjs';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { DialogData } from 'src/app/interfaces/data-dialog.interface';
import { GraphicCard } from 'src/app/interfaces/graphic-card.interface';
import { loadGraphicCards } from 'src/app/store/actions/graphic-card.actions';
import { GraphicCardService } from 'src/app/services/graphic-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public graphicCards: GraphicCard[] = [];
  public graphicCards$: Observable<GraphicCard[]> = new Observable;
  private _pageSize: number = 14;
  private _pageNumber: number = 1;
  private _dataError: DialogData = {
    title: '',
    desc: ''
  };

  public getpageSize(): number {
    return this._pageNumber;
  }

  public getPageNumber(): number {
    return this._pageNumber;
  }

  public set pageSize(size: number) {
    this._pageSize = size;
  }

  public set pageNumber(number: number) {
    this._pageNumber = number;
  }

  constructor(
    private graphicCardsService: GraphicCardService,
    private store: Store<{ graphicCard: GraphicCard[] }>,
    public dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.getGraphicCards();
    this.graphicCards$ = this.store.select(state => state.graphicCard);
    this.store.dispatch(loadGraphicCards());
  }

  private getGraphicCards(): void {
    this.graphicCardsService.getGraphicCardsPage(this._pageSize, this._pageNumber)
      .pipe(
        catchError((error: HttpErrorResponse) => {

          this._dataError = {
            title: 'Unknown error occurred!',
            desc: 'Descripción de la alerta'
          };
          if (error.error instanceof ErrorEvent) {
            this._dataError.desc = `Error: ${error.error.message}`;
          } else {
            this._dataError.desc = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.showAlert();
          return throwError(() => new Error(this._dataError.desc));
        })
      )
      .subscribe(data => {
        this.graphicCards = [...this.graphicCards, ...data];
      });
  }

  public onScroll($event: number): void {
    if($event > this._pageNumber) {
      this._pageNumber++;
      this.getGraphicCards();
    }
  }

  private showAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: this._dataError.title,
        desc: this._dataError.desc
      }
    });
  }

}
