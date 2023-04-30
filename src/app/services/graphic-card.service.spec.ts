import { TestBed } from '@angular/core/testing';
import { GraphicCardService } from './graphic-card.service';
import { GraphicCard } from '../interfaces/graphic-card.interface';
import { of } from 'rxjs';

describe('GraphicCardService', () => {
  let service: GraphicCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphicCardService]
    });
    service = TestBed.inject(GraphicCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of a page of graphic cards', () => {
    const expectedData: GraphicCard[] = [
      {
        id: 1,
        name: "Asus Rog Strix",
        manufacturer: "Asus",
        model: "Rog Strix",
        price: 200.4,
        image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        id: 2,
        name: "Asus Rog Strix",
        manufacturer: "Asus",
        model: "Rog Strix",
        price: 200.4,
        image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        id: 3,
        name: "Asus Rog Strix",
        manufacturer: "Asus",
        model: "Rog Strix",
        price: 200.4,
        image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        id: 4,
        name: "Asus Rog Strix",
        manufacturer: "Asus",
        model: "Rog Strix",
        price: 200.4,
        image: "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      }, {
        id: 6,
        name: "Nvidia EVGA 24G-P5-3975-KR",
        manufacturer: "Nvidia",
        model: "EVGA 24G-P5-3975-KR",
        price: 1540.65,
        image: "https://assets.nvidia.partners/images/DE_85987028_100523487_ES.jpg"
      }
    ];
    spyOn(service, 'getGraphicCardsPage').and.returnValue(of(expectedData));
    service.getGraphicCardsPage(1, 4).subscribe((data: GraphicCard[]) => {
      expect(data.length).toEqual(expectedData.length);
    });
    expect(service.getGraphicCardsPage).toHaveBeenCalledWith(1, 4);

    spyOn(service, 'getGraphicCards').and.returnValue(of(expectedData));
    service.getGraphicCards().subscribe(() => {
      expect(29).toEqual(expectedData.length);
    });
    expect(service.getGraphicCards).toHaveBeenCalledWith();
  });

  it('should return an observable of filtered graphic cards', () => {
    const expectedData: GraphicCard[] = [
      {
        "id": 6,
        "name": "Nvidia EVGA 24G-P5-3975-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3975-KR",
        "price": 1540.65,
        "image": "https://assets.nvidia.partners/images/DE_85987028_100523487_ES.jpg"
      }
    ];
    spyOn(service, 'searchGraphicCards').and.returnValue(of(expectedData));
    service.searchGraphicCards('Nvidia EVGA 24G-P5-3975-KR').subscribe((data: GraphicCard[] | undefined) => {
      expect(data).toEqual(expectedData);
    });
    expect(service.searchGraphicCards).toHaveBeenCalledWith('Nvidia EVGA 24G-P5-3975-KR');
  });


  it('should return an observable of filtered graphic cards', () => {
    const expectedData: GraphicCard = {
      "id": 6,
      "name": "Nvidia EVGA 24G-P5-3975-KR",
      "manufacturer": "Nvidia",
      "model": "EVGA 24G-P5-3975-KR",
      "price": 1540.65,
      "image": "https://assets.nvidia.partners/images/DE_85987028_100523487_ES.jpg"
    };
    spyOn(service, 'getGraphicCard').and.returnValue(of(expectedData));
    service.getGraphicCard(6).subscribe((data: GraphicCard | undefined) => {
      expect(data).toEqual(expectedData);
    });
    expect(service.getGraphicCard).toHaveBeenCalledWith(6);
  });

});
