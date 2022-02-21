import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service'
import { UsersService } from './services/users.service'
import { FilesService } from './services/files.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  imgParent ='';
  showImg = true;
  imgRta = '';

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private filesService: FilesService,
    private tokenService: TokenService,
  ){}

  ngOnInit(){
    const token = this.tokenService.getToken();
    if (token){
      this.authService.getProfile()
        .subscribe()
    }
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }

  createUser(){
    this.userService.create({
      name: 'Mariano',
      email: 'vinito@mail.com',
      password: '123456',
      role: 'customer',
    })
    .subscribe(rta => {
      console.log(rta)
    })
  }

  downloadPdf(){
    this.filesService.getfile('my.pdf', '/pdf.js/web/compressed.tracemonkey-pldi-09.pdf', 'application/pdf')
      .subscribe()
  }

  onUpload(event: Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file){
      this.filesService.uploadfile(file)
        .subscribe(rta => {
          this.imgRta = rta.location;
        })
    }
  }

}
