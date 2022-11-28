import { Component, OnInit } from '@angular/core';
import { FirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  user: string = ""

  constructor(
    private authService: AuthService,
    private router:Router,
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.onAuthStateChanged(( user:any )=>{
      if(user){
        this.user = user.multiFactor.user.email
      }
      else{
        this.user = ""
      }
    })
      
  }

  logout(){
    this.authService.logout()
      .then(()=>{
        this.router.navigate(['auth'])
      })
  }

}
