import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'doc-loader',
    templateUrl: './doc-loader.component.html'
})
export class DocLoaderComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const data = this.activatedRoute.snapshot.data;
        const parent = window.parent;
        if (parent) {
            parent.postMessage(data, '*');
        }
    }
}