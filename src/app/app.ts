import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})
export class AppComponent implements AfterViewInit {
    constructor(private router: Router) {
    }

    @HostListener('window:message', ['$event'])
    message(event: any) {
        if (typeof event.data === 'string') {
            this.router.navigateByUrl('/' + event.data);
        }
    }

    ngAfterViewInit() {
        const parent = window.parent;
        if (parent) {
            parent.postMessage('loaded', '*');
        }
    }
}
