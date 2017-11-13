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
        if (typeof event.data === 'string' && event.data !== '') {
            if (event.data === 'tab') {
                this.router.navigateByUrl('/tab/(route1:tab1//route2:tab2//route3:tab3//route4:tab4)');
                return;
            }
            this.router.navigateByUrl('/' + event.data);
        }
    }

    ngAfterViewInit() {
        const parent = window.parent;
        if (parent && parent !== window) {
            parent.postMessage('loaded', '*');
        }
    }
}
