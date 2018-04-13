import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class SendDocService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot) {
        const data = route.data;
        const parent = window.parent;
        if (parent) {
            parent.postMessage(data, '*');
        }
        return true;
    }
}