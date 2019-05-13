import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagliaCleanServiceService {
  public utenteActivo=null;
  public loading=null;
  public Lista=[]
  public attivatabs=false;
   constructor(public afDB: AngularFireDatabase, public loadingController: LoadingController, private afAuth :  AngularFireAuth, public storage: Storage,private router: Router) {
    this.createLoading();
   }

  public getPostiLavoro() {
    return this.afDB.list('/postilavoro/').valueChanges()
    //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
  }

  public getOre() {
    
    return this.afDB.list('/ore/').valueChanges();
    //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
  }

  public getOreId() {
    return this.afDB.list('/ore/').auditTrail();
    //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
  }


  public addOre(ora) {
    this.onLoading();
    return this.afDB.list('/ore/').push(ora)
    .then((res) => {
      this.offLoading();
     
      // El usuario se ha creado correctamente.
    })
    .catch(err => this.offLoading())
    //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
  }

  public delete(key){
    this.onLoading();
    console.log(key);
    this.afDB.database.ref('ore/'+key).remove() .then((res) => {
      console.log(res);
      this.offLoading();
      // El usuario se ha creado correctamente.
    })
    .catch(err => this.offLoading())
    //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
  }
   
   
  async createLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'circles'
    });
    this.loading.present();
    this.loading.hidden=true;
  }

   async onLoading() {
    this.loading.hidden=false;
  }

  async offLoading() {
    this.loading.hidden=true;
  }


  // Registro de usuario
  registerUser(email: string, password: string) {
    this.onLoading();
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.offLoading();
        // El usuario se ha creado correctamente.
      })
      .catch(err => this.offLoading())
  }

  // Login de usuario
  loginUser(email: string, password: string) {
    this.onLoading();
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => { 
        this.utenteActivo = user.user;
        this.storage.set('token',user.user.uid);
        this.storage.set('email',user.user.email);
        this.storage.set('userId',user.user.uid);
        this.attivatabs=true;
        this.router.navigateByUrl('/tabs/tab1');
        this.offLoading();
      })
      .catch(err => this.offLoading())
      
  }

    // Login de usuario
    public async logoutUser() {
       this.storage.remove('token');
       this.storage.remove('email');
       this.storage.remove('userId');
        this.utenteActivo=null;
        this.router.navigateByUrl('login');
    }

  public mese:Array<any> = [
    {
      "nome": "Gennaio",
      "id": 1
    },
    {
      "nome": "Febraio",
      "id": 2
    },
    {
      "nome": "Marzo",
      "id": 3
    },
    {
      "nome": "Aprile",
      "id": 4
    },
    {
      "nome": "Maggio",
      "id": 5
    },
    {
      "nome": "Giugnio",
      "id": 6
    },
    {
      "nome": "Luglio",
      "id": 7
    },
    {
      "nome": "Agosto",
      "id": 8
    },
    {
      "nome": "Settembre",
      "id": 9
    },
    {
      "nome": "Ottobre",
      "id": 10
    },
    {
      "nome": "Nomvembre",
      "id": 11
    },
    {
      "nome": "Dicembre",
      "id": 12
    }


  ]
}
