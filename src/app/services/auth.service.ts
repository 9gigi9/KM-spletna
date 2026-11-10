import { inject, Injectable, signal } from '@angular/core';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(FirebaseService).auth;

  // undefined until firebase restores the session
  readonly currentUser = signal<User | null | undefined>(undefined);

  constructor() {
    if (this.auth) {
      onAuthStateChanged(this.auth, (user) => this.currentUser.set(user));
    }
  }

  signInWithGoogle(): void {
    if (!this.auth) {
      return;
    }
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).catch((error) =>
      console.log('sign in error: ' + error),
    );
  }

  signOut(): void {
    if (!this.auth) {
      return;
    }
    signOut(this.auth).catch((error) =>
      console.log('sign out error: ' + error),
    );
  }
}
