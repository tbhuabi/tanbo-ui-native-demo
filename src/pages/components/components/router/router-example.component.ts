import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './router-example.component.html'
})
export class RouterExampleComponent {
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {

    }

    goToPage() {
        this.router.navigate(['../child'], {
            relativeTo: this.activatedRoute
        });
    }
}