import { Component } from '@angular/core';

import { AuthService } from './services/auth.service'
import { UsersService } from './services/users.service'
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent ='';
  showImg = true;
  imgRta = '';

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private filesService: FilesService,
  ){}

  toggleImg(){
    this.showImg = !this.showImg;
  }

  createUser(){
    this.userService.create({
      name: 'Mariano',
      email: 'vinito@mail.com',
      password: '123456'
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
