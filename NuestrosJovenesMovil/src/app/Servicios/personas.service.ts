import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IPersonas } from '../Interfaces/IPersonas'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private db: AngularFirestore) { }

  getPersonas()
  {
    return this.db.collection('personas').snapshotChanges().pipe(map(personas=>{
      return personas.map(a=> {
        const data = a.payload.doc.data() as IPersonas;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }
}
