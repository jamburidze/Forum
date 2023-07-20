import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  constructor(private router : Router, private postsService :  PostsService) {}

  submit(){
    alert("Your Comment Has Been Successfully Posted!")
    this.router.navigate(["home-page"])
  }

  commentsArray : any = []

  ngOnInit():void {
    this.getComments()
  }

  getComments(){
    this.postsService.getComments().subscribe(res=>{
      this.commentsArray = res;
    })
  }
}
