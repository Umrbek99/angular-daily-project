import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth-service/auth.service';

import { Post } from './models/PostInterface';
import { PostsService } from './services/posts.service';


@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss']
})
export class HttpRequestsComponent implements OnInit,OnDestroy{
  isAuthenticated = false;
  private userSub!:Subscription;
  loadedPosts :any[]= [];
  loading = false;
  error = '';

  constructor(private http: HttpClient,private postsService:PostsService,private auth:AuthService){

  }

  ngOnInit(): void {
    this. fetchPosts(); 
    this.postsService.error.subscribe(error => this.error = error);
    this.userSub =  this.auth.user.subscribe(
      {
        next:(n) => {this.isAuthenticated = !n ? false : true},
        error:(e) => {},
        complete:() =>{}  
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  onCreatePost(postData:Post){
    this.postsService.createAndStorePost(postData);
  }

  onLogout(){
    this.auth.logout();
  }


  fetchPosts(){
    this.loading = true;
    this.postsService.fetchPosts().subscribe(
      {
        next: (v) => this.loadedPosts = v,
        error: (e) => {this.error = e.error.error},
        complete: () => this.loading = false
      }
    )
  }

  deleteAllposts(){
    this.postsService.deletePost().subscribe(()=>{
      this.loadedPosts = [];
    });
  }




}










