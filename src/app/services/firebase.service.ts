import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { firebaseConfig } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly app = initializeApp(firebaseConfig);
  readonly auth: Auth | null = this.isBrowser ? getAuth(this.app) : null;
}
