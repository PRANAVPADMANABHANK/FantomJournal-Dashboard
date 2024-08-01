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
    mobile: number = 0;
    password: string = '';

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
        const signupData = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            password: this.password,
        };

        console.log("submit success")
        // Send data to the server
        this.apiService.signup(signupData).subscribe({
            next: (response) => {
              console.log('Signup successful', response);
              this.router.navigate(['/dashboard']);
            },
            error: (error) => {
              console.error('Signup failed', error);
            },
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
