import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  // private readonly base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private readonly base = '/api/pets';

  constructor(private readonly http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.base);
    // return of(BOOKS);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.base, pet);
  }

  getPet(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.base}/${id}`);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.base}/${pet._id}`, pet);
  }

  removePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(`${this.base}/${id}`);
  }
}
