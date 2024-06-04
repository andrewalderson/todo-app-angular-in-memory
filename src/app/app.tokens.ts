import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { InjectionToken, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export const IS_MOBILE_SCREEN = new InjectionToken('IS_MOBILE_SCREEN', {
    providedIn: 'root',
    factory: () =>
        toSignal(
            inject(BreakpointObserver)
                .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
                .pipe(map((result) => result.matches)),
            { requireSync: true },
        ),
});