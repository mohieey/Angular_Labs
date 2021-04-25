import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { usernamePatternValidation } from '../validationfuncs/usernamePatternValidation';
import { validation } from '../validationfuncs/validation';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private fb:FormBuilder,private productService:ProductService) { }

  ngOnInit(): void {
    this.productList=this.productService.GetAllProducts();

  }

  productList

  notes=this.fb.group({
    name:['',[Validators.required]],
    username:['',[Validators.required,validation(/admin/)]],
    discount:[''],
    confirmPassword:['',[Validators.required]],
    haveadiscount:[''],
    productList:['',[Validators.required]],
    comments:this.fb.array([]),
  },);

  get username()
  {
    return this.notes.get('username');
  }
 get haveadiscount()
  {
    return this.notes.get('haveadiscount');
  }



  get comments()
  {
    return this.notes.get('comments') as FormArray;
  }
  addComment()
  {
    this.comments.push(this.fb.control(''));
  }

  removeComment(emailIndex)
  {
    this.comments.removeAt(emailIndex);
  }
}
