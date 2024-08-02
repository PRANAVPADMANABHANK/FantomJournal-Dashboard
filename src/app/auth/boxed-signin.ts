import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/service/app.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service'; // Adjust the path if necessary

@Component({
    moduleId: module.id,
    templateUrl: './boxed-signin.html',
    animations: [
        trigger('toggleAnimation', [
            transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
            transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
        ]),
    ],
})
export class BoxedSigninComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';
    store: any;
    constructor(
        public translate: TranslateService,
        public storeData: Store<any>,
        public router: Router,
        private appSetting: AppService,
        private http: HttpClient,
        private apiService: ApiService,
        private authService: AuthService
    ) {
        this.initStore();
    }

    onLogin(): void {
        if (!this.email || !this.password) {
            this.errorMessage = 'Please fill in both email and password.';
            return;
        }

        this.authService.login(this.email, this.password).subscribe({
            next: (response) => {
                console.log(response, "response got in UI");

                if (response && response.accessToken) {
                    this.router.navigate(['/auth/welcome']);
                } else {
                    this.errorMessage = 'Login failed/Incorrect Password. Please try again.';
                }
            },
            error: (error) => {
                if (error.status === 400) {
                    this.errorMessage = 'Invalid credentials. Please check your email and password.';
                } else {
                    this.errorMessage = 'An error occurred. Please try again later.';
                }
                console.error('Login failed', error);
            }
        });
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
