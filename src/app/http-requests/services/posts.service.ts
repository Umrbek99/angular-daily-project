import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "../models/PostInterface";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class PostsService{
    constructor(private http:HttpClient){}
    error = new Subject<string>();
    
    createAndStorePost(postData : Post){
        this.http
        .post("https://backend-angular-e99ac-default-rtdb.firebaseio.com/posts.json",postData,
            {
                observe:'response',
                responseType:'json'
            } 
        )
        .subscribe({
            next:(n)=>{console.log(n.body)},
            error:(e) => {this.error.next(e.message)},
            complete:()=>{}
        });
    }
 
    fetchPosts(){
        return this.http
        .get<any>("https://backend-angular-e99ac-default-rtdb.firebaseio.com/posts.json",
        {
            headers: new HttpHeaders({'Custom-header':'Hello'}),
            params: new HttpParams().set('print','pretty')
        }) 
        .pipe(map(responseData => {
            const postArray:Post[] = [];
            for(const key in responseData){
                postArray.push({...responseData[key],id:key})
            }
            return postArray;
        }));
    }


    deletePost(){
        return this.http.delete("https://backend-angular-e99ac-default-rtdb.firebaseio.com/posts.json");
    }







} 



