import { Component } from '@angular/core';
import Swal from 'sweetalert2';

import { OnExit } from './../../../guards/exit.guard';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  constructor() { }

  onExit(){
    // const rta = confirm('Logica desde comp, estas seguro salir?');
    // return rta;
    const confirm = Swal.fire({
      title: 'Estas seguro salir?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#ACD9B2',
      cancelButtonColor: '#F25050',
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      }
      return false
    });
    return confirm
  }

}
