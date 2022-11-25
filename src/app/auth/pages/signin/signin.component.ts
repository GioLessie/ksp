import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email: string = ""
  password: string = ""

  constructor(
    private serviceAuth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  signin(){
    this.serviceAuth.register(this.email, this.password)
      .then((data)=>{
        this.router.navigate(['empleados'])
        this.showSnack("Registrado correctamente")
      })
      .catch((data)=>{
        this.showSnack(data.message)
      })
  }

  showSnack(mensaje:string){
    this.snackbar.open(mensaje, 'OK!', {
      duration: 5500
    })
  }

}
