import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Tour} from "../model/Tour";
import {HttpClient} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>(API_URL + '/tours');
  }

  saveProduct(tour: any): Observable<Tour> {
    return this.http.post<Tour>(API_URL + '/tours', tour);
  }

  findById(id: number): Observable<Tour> {
    console.log(this.http.get<Tour>(`${API_URL}/tours/${id}`))
    return this.http.get<Tour>(`${API_URL}/tours/${id}`);
  }

  updateProduct(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${API_URL}/tours/${id}`, tour);
  }

  deleteProduct(id: number): Observable<Tour> {
    return this.http.delete<Tour>(`${API_URL}/tours/${id}`);
  }

}
