import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GraphicCard } from '../interfaces/graphic-card.interface';
import { environment } from 'src/enviroments/environment.prod';
import { GraphicCardResponse, GraphicCardsResponse } from '../interfaces/graphic-card-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphicCardService {
  private readonly apiUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  getAllGraphicCards(): Observable<GraphicCard[]> {
    const result = this.http.get<GraphicCard[]>(this.apiUrl);
    return result;
  }

  getAllGraphicCardsPagination(page: number = 1, pageSize: number = 14): Observable<GraphicCardsResponse> {
    const params = new HttpParams().set('page', page.toString()).set('limit', pageSize.toString());
    const result = this.http.get<GraphicCardsResponse>(`${this.apiUrl}/graphic-cards`, { params });
    return result;
  }

  searchGraphicCards(name: string): Observable<GraphicCard[]> {
    const url = `${this.apiUrl}name`;
    return this.http.post<GraphicCard[]>(url, name);
  }

  searchGraphicCardsByName(name: string): Observable<GraphicCard[]> {
    const url = `${this.apiUrl}/graphic-cards-by-name`;
    return this.http.post<GraphicCard[]>(url, name);
  }

  getGraphicCardById(id: number): Observable<GraphicCardResponse> {
    return this.http.post<any>(`${this.apiUrl}/graphic-cards/id`, id);
  }

  createGraphicCard(graphicCard: GraphicCard): Observable<GraphicCard> {
    return this.http.post<GraphicCard>(`${this.apiUrl}/graphic-cards/new`, graphicCard);
  }

  updateGraphicCard(graphicCard: GraphicCard): Observable<GraphicCard> {
    return this.http.put<GraphicCard>(`${this.apiUrl}/graphic-cards/update`, graphicCard);
  }

}
