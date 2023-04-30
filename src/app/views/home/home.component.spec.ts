import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { throwError } from 'rxjs';
import { GraphicCard } from 'src/app/interfaces/graphic-card.interface';
import { loadGraphicCards } from 'src/app/store/actions/graphic-card.actions';
import { GraphicCardService } from 'src/app/services/graphic-card.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let graphicCardService: jasmine.SpyObj<GraphicCardService>;
  let store: Store<{ graphicCard: GraphicCard[] }>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    graphicCardService = jasmine.createSpyObj('GraphicCardService', ['getGraphicCardsPage']);
    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: GraphicCardService, useValue: graphicCardService },
        { provide: MatDialog, useValue: dialog }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

});
