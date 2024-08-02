import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/service/app.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';

@Component({
    moduleId: module.id,
    templateUrl: './boxed-signup.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class BoxedSignupComponent {
    name: string = '';
    email: string = '';
    mobile: any;
    password: string = '';

    formSubmitted: boolean = false;
    errors: any = {};

    store: any;
    constructor(
        public translate: TranslateService,
        public storeData: Store<any>,
        public router: Router,
        private appSetting: AppService,
        private http: HttpClient,
        private apiService: ApiService
    ) {
        this.initStore();
    }

    onSubmit() {
        this.formSubmitted = true;
        this.errors = {}; // Reset errors

        // Basic validation
        if (!this.name) {
            this.errors.name = 'Name is required';
        }
        if (!this.email) {
            this.errors.email = 'Email is required';
        }
        if (!this.mobile) {
            this.errors.mobile = 'Mobile number is required';
        }
        if (!this.password) {
            this.errors.password = 'Password is required';
        }

        // If there are validation errors, don't proceed
        if (Object.keys(this.errors).length > 0) {
            return;
        }

        const signupData = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            password: this.password,
        };

        // Send data to the server
        this.apiService.signup(signupData).subscribe({
            next: (response) => {
                console.log('Signup successful', response);
                this.router.navigate(['/auth/boxed-signin']);
            },
            error: (error) => {
                if (error.status === 500 && error.error.error && error.error.error.includes('E11000 duplicate key error')) {
                    const duplicateField = error.error.error.includes('email') ? 'email' : 'another field';
                    console.error(`Signup failed: Duplicate ${duplicateField}`);
                    // Display the error message to the user
                    alert(`The ${duplicateField} "${signupData.email}" is already in use. Please use a different ${duplicateField}.`);
                } else {
                    console.error('Signup failed', error);
                    // Handle other errors
                    alert('Signup failed. Please try again.');
                }
            },
        });
    }

    handleSignupErrors(error: any) {
        if (error && error.error && error.error.errors) {
            const errors = error.error.errors;
            this.errors = {
                name: errors.name?.message || '',
                email: errors.email?.message || '',
                mobile: errors.mobile?.message || '',
                password: errors.password?.message || '',
            };
        } else {
            console.error('Unexpected error:', error);
        }
    }

    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }

    changeLanguage(item: any) {
        this.translate.use(item.code);
        this.appSetting.toggleLanguage(item);
        if (this.store.locale?.toLowerCase() === 'ae') {
            this.storeData.dispatch({ type: 'toggleRTL', payload: 'rtl' });
        } else {
            this.storeData.dispatch({ type: 'toggleRTL', payload: 'ltr' });
        }
        window.location.reload();
    }
}
