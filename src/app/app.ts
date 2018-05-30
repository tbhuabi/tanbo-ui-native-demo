import { Component, AfterViewInit } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})
export class AppComponent implements AfterViewInit {
    private parent: any;

    constructor(private router: Router) {
    }

    ngAfterViewInit() {
        const parent = window.parent;
        if (parent && parent !== window) {
            this.parent = parent;
            const style = document.createElement('style');
            style.innerHTML = 'ui-header{padding-top:44px}ui-tab-bar,ui-content,ui-scroll{padding-bottom:34px}';
            document.querySelector('head').appendChild(style);
            this.router.events.subscribe((ev: Event) => {
                if (ev instanceof NavigationEnd) {
                    parent.postMessage(location.href, '*');
                }
            });
        }
    }
}
