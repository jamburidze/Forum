import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http :HttpClient) { }

  posts_url = "https://jsonplaceholder.typicode.com/posts"

  getPosts():Observable<any>{
    return this.http.get(this.posts_url)
  }

  comments_url = "https://jsonplaceholder.typicode.com/posts/1/comments"

  getComments():Observable<any>{
    return this.http.get(this.comments_url)
  }
}
