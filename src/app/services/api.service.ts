import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private httpClient: HttpClient
    ) {}

    private signupUrl = 'http://localhost:5145/api/user/signup';
    private loginUrl = 'http://localhost:5145/api/auth/login';

    // Signup Request
    signup(userData: any): Observable<any> {
        return this.httpClient.post(this.signupUrl, userData);
    }

    // Login Request
    login(credentials: any): Observable<any> {
        return this.httpClient.post(this.loginUrl, credentials);
    }
}