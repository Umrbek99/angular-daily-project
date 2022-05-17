import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { BehaviorSubject, of, Subject, throwError } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "../user-model/user.model";
export interface AuthResponseData {
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:string
}

@Injectable({providedIn:"root"})
export class AuthService {
    user = new BehaviorSubject<User | any>(null);
    constructor(private http:HttpClient){}

    SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7RuJKoHZnNM58YRzVa7RLp5R7eLUdlP8';
    LOG_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7RuJKoHZnNM58YRzVa7RLp5R7eLUdlP8'
    
    signup(email:string,password:string){
        let data ={
            "email":email,
            "password":password,
            "returnSecureToken":true
        }
        return this.http.post<AuthResponseData>(this.SIGN_UP_URL,data).pipe(catchError(this.handleError),
        tap(resData => {
            this.handleAuthentification(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
        })
        
    )}

    login(email:string,password:string){
        let data ={
            "email":email,
            "password":password,
            "returnSecureToken":true
        }
        return this.http
            .post<AuthResponseData>(this.LOG_IN_URL,data)
            .pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentification(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
                }))
    }

    private handleAuthentification(email :string,token :string,userId:string,expiresIn:number){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(
            email,
            userId,
            token,
            expirationDate
            );
            this.user.next(user);
    }
 
    private handleError(errorResp:HttpErrorResponse){
        let errorMessage  = "An unknown error occured!"
        if(!errorResp.error || !errorResp.error.error ){
            return throwError(() => new Error(errorMessage));
        }
        switch(errorResp.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'Email already exists!'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email does not exists!!'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Password is invalid!'
                break;    
                
        }
        return throwError(() => new Error(errorMessage));
    }


}