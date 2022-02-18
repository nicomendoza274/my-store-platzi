import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store.service'
import { AuthService } from '../../services/auth.service'
import { CategoriesService } from '../../services/category.service'
import { User } from '../../models/user.model';
import { Category } from '../../models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  activeMenu = false;
  counter = 0;
  profile: User  | null = null ;
  categories: Category[] = [];

  constructor(
    private storeService: StoreService,
    private authService: AuthService,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products =>{
      this.counter = products.length;
    })
    this.getAllCategories();
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  onLoginAndGet(){
    this.authService.loginAndGet('vinito@mail.com','123456')
      .subscribe((user_data)=> {
        this.profile = user_data;
      })
  }

  getAllCategories(){
    this.categoryService.getAll()
    .subscribe(data =>{
      this.categories = data;
    });
  }


}
