import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: './welcome.html',
    animations: [
        trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate('10800ms ease-out', style({ opacity: 1 }))])]),
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class Welcome implements OnInit {
    userName: string | null = '';

    constructor(private router: Router) { }

    ngOnInit() {
        this.userName = localStorage.getItem('userName');
    }

    navigateToDashboard() {
        this.router.navigate(['/auth/welcome-qst']);
    }
}
