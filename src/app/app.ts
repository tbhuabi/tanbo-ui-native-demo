import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.html'
})
export class AppComponent implements AfterViewInit {
    private parent: any;

    constructor(private router: Router) {
    }

    @HostListener('window:message', ['$event'])
    message(event: any) {
        if (typeof event.data === 'string' && event.data !== '') {
            let url: string;
            if (event.data === 'tab') {
                url = '/tab/(route1:tab1//route2:tab2//route3:tab3//route4:tab4)';
            } else {
                url = '/' + event.data;
            }

            this.router.navigateByUrl(url).then(() => {
                if (this.parent) {
                    this.parent.postMessage(location.href, '*');
                }
            });
        }
    }

    ngAfterViewInit() {
        const parent = window.parent;
        if (parent && parent !== window) {
            this.parent = parent;
            const style = document.createElement('style');
            style.innerHTML = 'ui-header{padding-top:44px}ui-tab-bar{padding-bottom:34px}';
            document.querySelector('head').appendChild(style);
            parent.postMessage('loaded', '*');
        }
    }
}
