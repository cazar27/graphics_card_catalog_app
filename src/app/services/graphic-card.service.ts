import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/enviroments/environment.prod';
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

  private _baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getGraphicCards(): Observable<any> {
    const data$ = of(this.graphicCards.data);
    return data$;
    //return this.http.get<any>(this._baseUrl);
  }

  getGraphicCard(id: number): Observable<any> {
    const searchGcard = this.graphicCards.data.find(gc => gc.id === id);
    const data$ = of(searchGcard);
    return data$;
    //return this.http.get<any>(this._baseUrl);
  }

}

