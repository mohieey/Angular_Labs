import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { IPost } from '../shared classes and types/IPost';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private posttService:PostsService) {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.pID=parseInt(params.get('id'));
      })

   }

pID
Post:IPost
Comments:IPost[]
errorMessage

  ngOnInit(): void {
    
      this.posttService.getPost(this.pID).subscribe(
        post=>
        {
          this.Post = post;
          
        },
        responseError=>
        {
          this.errorMessage=responseError;
        }
      )


      this.posttService.getAllComments(this.pID).subscribe(
        comments=>
        {
          this.Comments = comments;
          
        },
        responseError=>
        {
          this.errorMessage=responseError;
        }
      )



      
  }

}
