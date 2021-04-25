import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { PNFComponent } from './pnf/pnf.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { UsersComponent } from './users/users.component';
import { ProductswithdisComponent } from './productswithdis/productswithdis.component';
import { ProductswithnodisComponent } from './productswithnodis/productswithnodis.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent,
  children:[
    {path:'withdiscount',component:ProductswithdisComponent},
    {path:'withoutdiscount',component:ProductswithnodisComponent}
  ]
  },
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:SinglepostComponent},
  {path:'register',component:RegisterformComponent},
  {path:'login',component:LoginformComponent},
  {path:'notes',component:NotesComponent},
  
  {path:'**',component:PNFComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
