import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy {
    
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        
        /*
        return of(true).pipe(
            delay(5000), 
            switchMap(d => fn())
        );
        */

        if (route.data && route.data['preload']) {
            return fn();
        }

        return of(null);
        
    }
}