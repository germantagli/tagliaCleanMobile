import { Component, OnInit } from '@angular/core';
import { TagliaCleanServiceService } from '../taglia-clean-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth:TagliaCleanServiceService) { }
  user= { email : '', password : ''};
  ngOnInit() {
  }

  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
     
    })

  }

  login() {
    this.auth.loginUser(this.user.email, this.user.password).then((user) => {
    }
    )
      .catch(err => {
        alert("error login");
      })
  }
  

}
