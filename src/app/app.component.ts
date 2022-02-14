import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Nicolás';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: '',
  }

  person = {
    name:'Nicolás',
    age: 27,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName: string = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products: Product[] =[
    {
      name: 'El mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 365,
      image: '../assets/images/bike.jpg'
    },
    {
      name: 'Collecion de albumnes',
      price: 34,
      image: '../assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg'
    },
    {
      name: 'Casa para perroe',
      price: 34,
      image: '../assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/glasses.jpg'
    },
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index:number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }

}
