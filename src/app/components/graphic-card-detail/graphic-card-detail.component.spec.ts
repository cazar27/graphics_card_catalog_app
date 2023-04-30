import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { GraphicCardDetailComponent } from './graphic-card-detail.component';
import { GraphicCard } from 'src/app/interfaces/graphic-card.interface';
import { GraphicCardService } from 'src/app/services/graphic-card.service';

describe('GraphicCardDetailComponent', () => {
  let component: GraphicCardDetailComponent;
  let fixture: ComponentFixture<GraphicCardDetailComponent>;
  let graphicCardsServiceSpy: jasmine.SpyObj<GraphicCardService>;
  let locationSpy: jasmine.SpyObj<Location>;

  beforeEach(() => {
    const graphicCardsService = jasmine.createSpyObj('GraphicCardService', ['getGraphicCard']);
    const location = jasmine.createSpyObj('Location', ['back']);

    TestBed.configureTestingModule({
      declarations: [GraphicCardDetailComponent],
      providers: [
        { provide: GraphicCardService, useValue: graphicCardsService },
        { provide: Location, useValue: location },
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } }
      ]
    });

    graphicCardsServiceSpy = TestBed.inject(GraphicCardService) as jasmine.SpyObj<GraphicCardService>;
    locationSpy = TestBed.inject(Location) as jasmine.SpyObj<Location>;

    fixture = TestBed.createComponent(GraphicCardDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load graphic card by id from service', () => {
    const graphicCard: GraphicCard = {
      id: 1, name: 'Test Graphic Card',
      manufacturer: 'Test Manufacturer',
      model: '',
      price: 0,
      image: ''
    };
    graphicCardsServiceSpy.getGraphicCard.and.returnValue(of(graphicCard));
    component.ngOnInit();
    expect(component.graphicCard).toEqual(graphicCard);
  });

  it('should emit buttonClicked event when button is clicked', () => {
    const id = 1;
    spyOn(component.buttonClicked, 'emit');
    component.onClick(id);
    expect(component.buttonClicked.emit).toHaveBeenCalledWith(id);
  });

  it('should go back when goBack() is called', () => {
    component.goBack();
    expect(locationSpy.back).toHaveBeenCalled();
  });

  it('should set loadGraphicCards to true when graphicCard is defined', () => {
    component.graphicCard = {
      id: 1, name: 'Test Graphic Card',
      manufacturer: 'Test Manufacturer',
      model: '',
      price: 0,
      image: ''
    };
    component.ngOnInit();
    expect(component.loadGraphicCards).toBeTruthy();
  });
});
