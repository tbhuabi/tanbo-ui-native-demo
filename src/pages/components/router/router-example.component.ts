import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './router-example.component.html'
})
export class RouterExampleComponent {
    constructor(private router: Router) {

    }

    goToPage() {
        this.router.navigate(['../child']);
    }
}