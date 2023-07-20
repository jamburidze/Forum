import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private router: Router, private postsService :  PostsService) {}

  transferToPosts(){
    this.router.navigate(['post-page'])
  }
  postsArray : any = []

  ngOnInit():void {
    this.getPosts()
  }

  getPosts(){
    this.postsService.getPosts().subscribe(res=>{
      this.postsArray = res;
    })
  }
}
