import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { IPost } from '../shared classes and types/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private poststService:PostsService,private router:Router) { }

Posts:IPost[];
errorMessage:string;


showPost(post){
  this.router.navigate(["/posts",post.id])

}

  ngOnInit(): void {
    this.poststService.getAllPosts().subscribe(
      posts =>
      {
        this.Posts = posts ;
      },
      responseError=>
      {
        this.errorMessage=responseError;
      }
    )
  }

}
