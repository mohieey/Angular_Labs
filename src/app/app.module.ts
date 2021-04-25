import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddpercentPipe } from './addpercent.pipe';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { PNFComponent } from './pnf/pnf.component';
import { ProductswithdisComponent } from './productswithdis/productswithdis.component';
import { ProductswithnodisComponent } from './productswithnodis/productswithnodis.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    MainBodyComponent,
    LeftNavComponent,
    RightNavComponent,
    ProductsComponent,
    AddpercentPipe,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    SinglepostComponent,
    PNFComponent,
    ProductswithdisComponent,
    ProductswithnodisComponent,
    RegisterformComponent,
    LoginformComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
