import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GraphicCard } from '../interfaces/graphic-card.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphicCardService {

  graphicCards = {
    "data": [
      {
        "id": 1,
        "name": "Asus Rog Strix",
        "manufacturer": "Asus",
        "model": "Rog Strix",
        "price": 200.4,
        "image": "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        "id": 2,
        "name": "Asus Rog Strix",
        "manufacturer": "Asus",
        "model": "Rog Strix",
        "price": 200.4,
        "image": "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        "id": 3,
        "name": "Asus Rog Strix",
        "manufacturer": "Asus",
        "model": "Rog Strix",
        "price": 200.4,
        "image": "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        "id": 4,
        "name": "Asus Rog Strix",
        "manufacturer": "Asus",
        "model": "Rog Strix",
        "price": 200.4,
        "image": "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        "id": 5,
        "name": "Asus Rog Strix",
        "manufacturer": "Asus",
        "model": "Rog Strix",
        "price": 200.4,
        "image": "https://media.ldlc.com/r1600/ld/products/00/05/98/32/LD0005983210.jpg"
      },
      {
        "id": 6,
        "name": "Nvidia EVGA 24G-P5-3975-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3975-KR",
        "price": 1540.65,
        "image": "https://assets.nvidia.partners/images/DE_85987028_100523487_ES.jpg"
      },
      {
        "id": 7,
        "name": "Nvidia Inno3D iChill GEFORCE RTX 3090 X4",
        "manufacturer": "Nvidia",
        "model": "Inno3D iChill GEFORCE RTX 3090 X4",
        "price": 1796.74,
        "image": "https://assets.nvidia.partners/images/DE_86009684_100535725_ES.jpg"
      },
      {
        "id": 8,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 9,
        "name": "Nvidia Zotac GAMING GeForce RTX 3090 Trinity OC",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2131.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 10,
        "name": "Nvidia Zotac GAMING GeForce RTX 3090 Trinity OC",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2131.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 11,
        "name": "Nvidia Zotac GAMING GeForce RTX 3090 Trinity OC",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2131.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 12,
        "name": "Nvidia Zotac GAMING GeForce RTX 3090 Trinity OC",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2131.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 13,
        "name": "Nvidia Zotac GAMING GeForce RTX 3090 Trinity OC",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2131.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 14,
        "name": "Nvidia Zotac GAMING GeForce RTX 3090 Trinity OC",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2131.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 15,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 16,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 17,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 18,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 19,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 20,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 21,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 22,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 23,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 24,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 25,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 26,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 27,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 28,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      },
      {
        "id": 29,
        "name": "Nvidia EVGA 24G-P5-3998-KR",
        "manufacturer": "Nvidia",
        "model": "EVGA 24G-P5-3998-KR",
        "price": 2039.74,
        "image": "https://assets.nvidia.partners/images/24G-P5-3998-KR.jpg"
      }
    ]
  };

  getGraphicCards(): Observable<GraphicCard[]> {
    const data$ = of(this.graphicCards.data);
    return data$;
  }

  getGraphicCardsPage(pageSize: number, pageNumber: number): Observable<GraphicCard[]> {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const data = this.graphicCards.data.slice(startIndex, endIndex);
    const data$ = of(data);
    return data$;
  }

  getGraphicCard(id: number): Observable<GraphicCard | undefined> {
    const searchGcard = this.graphicCards.data.find(gc => gc.id === id);
    const data$ = of(searchGcard);
    return data$;
  }

  searchGraphicCards(name: string): Observable<GraphicCard[] | undefined> {
    const data = this.graphicCards.data.filter((graphicCard: GraphicCard) => graphicCard.name.includes(name));
    const data$ = of(data);
    return data$;
  }


}

