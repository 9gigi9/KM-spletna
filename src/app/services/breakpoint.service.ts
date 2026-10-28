import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MOBILE_BREAKPOINT } from '../constants/breakpoints';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);

  readonly isMobile = toSignal(
    this.breakpointObserver
      .observe(MOBILE_BREAKPOINT)
      .pipe(map((state) => state.matches)),
    { initialValue: false },
  );
}
