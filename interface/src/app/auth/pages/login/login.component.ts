import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""

  constructor(
    private serviceAuth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.serviceAuth.login(this.email, this.password)
      .then((data)=>{
        this.router.navigate(['empleados'])
        this.showSnack("Bienvenido")
      })
      .catch((data)=>{
        this.showSnack(data.message)
      })
  }

  showSnack(mensaje:string){
    this.snackbar.open(mensaje, 'OK!', {
      duration: 3500
    })
  }

}
