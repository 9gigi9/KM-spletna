import { inject, Injectable } from '@angular/core';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { catchError, from, map, Observable, of } from 'rxjs';
import { FirebaseService } from '../../../services/firebase.service';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private readonly firestore = inject(FirebaseService).firestore;

  getPurchasedQuizIds(uid: string): Observable<string[]> {
    if (!this.firestore) {
      return of([]);
    }
    const purchases = query(
      collection(this.firestore, 'purchases'),
      where('uid', '==', uid),
    );
    return from(getDocs(purchases)).pipe(
      map((snapshot) =>
        snapshot.docs.map((purchase) => purchase.data()['quizId']),
      ),
    );
  }

  // security rules deny the read if the user hasn't bought the quiz
  getQuizUrl(quizId: string): Observable<string | null> {
    if (!this.firestore) {
      return of(null);
    }
    return from(getDoc(doc(this.firestore, 'quizzes', quizId))).pipe(
      map((snapshot) => (snapshot.exists() ? snapshot.data()['url'] : null)),
      catchError((error) => {
        console.log('get quiz url error: ' + error);
        return of(null);
      }),
    );
  }
}
