import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Post } from './models/PostInterface';
import { PostsService } from './services/posts.service';


@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.scss']
})
export class HttpRequestsComponent implements OnInit{
  loadedPosts :any[]= [];
  loading = false;
  error = '';

  constructor(private http: HttpClient,private postsService:PostsService) { }

  ngOnInit(): void {
    this. fetchPosts();
    this.postsService.error.subscribe(error => this.error = error);
  }

  onFetchPosts(){
    this.fetchPosts();
  }

  onCreatePost(postData:Post){
    this.postsService.createAndStorePost(postData);
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











