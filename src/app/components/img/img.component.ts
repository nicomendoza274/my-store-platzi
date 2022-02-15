import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = ''

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img)
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/images/default.jpg'
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // befor render
    // no correr cosas asincronas
    console.log('contructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Befor - during render
    // Actualizando los cambios en los Inputs
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // Befor render
    // async -fech -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(()=>{
    //   this.counter+=1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
      // Delete
      console.log('ngDestroy');
      // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }


  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
