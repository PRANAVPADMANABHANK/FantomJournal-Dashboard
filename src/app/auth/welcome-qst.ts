import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
    moduleId: module.id,
    templateUrl: './welcome-qst.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class WelcomeQst {
    constructor(private router: Router) {}

    submitAndNavigate(form: NgForm) {
        if (form.valid) {
            // Handle form submission logic
            this.router.navigate(['/dashboard']);
        } else {
            // If form is invalid, you can optionally show an error message
            alert('Please fill out all fields before submitting.');
        }
    }
}
