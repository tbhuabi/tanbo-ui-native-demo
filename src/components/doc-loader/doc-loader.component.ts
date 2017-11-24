import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'doc-loader',
    templateUrl: './doc-loader.component.html'
})
export class DocLoaderComponent implements OnInit, OnDestroy {
    sub: Subscription;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        const data = this.activatedRoute.snapshot.data;
        const parent = window.parent;
        if (parent) {
            parent.postMessage(data, '*');
        }
        this.sub = this.router.events.subscribe((e: Event) => {
            if (e instanceof NavigationEnd) {
                const url = '/' + this.activatedRoute.snapshot.url.join('/');
                const reg = new RegExp('^' + url);
                console.log(e.url);
                if (reg.test(e.url) && parent) {
                    console.log(true)
                    // parent.postMessage(data, '*');
                }
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}