import { Injectable } from "@angular/core";
import {AngularFirestoreCollection, AngularFirestore, } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Home {
  title: string;
  subtitle: string;
  createdAt: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private todoCollection: AngularFirestoreCollection<Home>
  private todo: Observable<Home[]>;
  constructor(db: AngularFirestore) {
    this.todoCollection = db.collection<Home>('home');
  }

  public addTodo(todo:Home){
    return this.todoCollection.add(todo);
  }
}
