import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { IPersona } from 'src/app/Interfaces/IPersona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: IPersona[];
  private apiLink = "http://localhost:8080/persona";  
  constructor(private http: HttpClient) { }

  getPersonas():Observable<IPersona[]>
  {
    return this.http.get<IPersona[]>(this.apiLink);
  }

  getPersona(personaId: string):Observable<IPersona>
  {
    return this.http.get<IPersona>(this.apiLink + '/' + personaId)
  }

  createPersona(persona: IPersona):Observable<IPersona>
  {
    return this.http.post<IPersona>(this.apiLink, persona);
  }

  updatePersona(persona: IPersona):Observable<IPersona>
  {
    return this.http.put<IPersona>(this.apiLink + '/' + persona.id.toString(), persona);
  }
}
