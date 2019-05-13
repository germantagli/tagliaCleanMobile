import { Component } from '@angular/core';
import { TagliaCleanServiceService } from '../taglia-clean-service.service';
import { NullAstVisitor } from '@angular/compiler';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  
  model = {
    "numero_ore":null,
    "date":null,
    "listaPostiLavoro":null,
    "utente":{}
  }

  utente = {
    "idUtente":null,
    "identificadore":null,
  }
  
  listaPostiLavoro;
  utenteLog;
  totalOre=0;
  oggi;
  ore;
  euro=0;

  constructor(public tagliaCleanServices:TagliaCleanServiceService,public storage: Storage) {
    this.initComponent();
  }
  addPosto(addPosto,action){
    if(!action){
      this.model.listaPostiLavoro=addPosto;
    }else{
      this.model.listaPostiLavoro=null;
    }
    this.listaPostiLavoro.forEach(element2 => {
      if(element2.id!== addPosto.id){
        element2.isChecked=false;
      }
    });
  }

  disableAgg() {
    let retorno = false;
    if(!this.model.date || !this.model.numero_ore || !this.model.listaPostiLavoro){
      retorno =true;
    }
    return retorno
  }
  
  gestioneOre(action){
    switch(action) { 
      case 'plus': { 
        this.model.numero_ore=this.model.numero_ore+0.5;
         break; 
      } 
      case 'meno': { 
        if(this.model.numero_ore>0){
          this.model.numero_ore=this.model.numero_ore-0.5;
        }
         break; 
      } 
   
   } 
  }

  addOra(){
    if (this.utente.identificadore && this.utente.idUtente){
      this.tagliaCleanServices.addOre(this.model).then((val) => {
        this.AggiornaOra();
        this.svuotaForm();
      })
    }else{
      this.svuotaForm();
      this.storage.get('email').then((val) => {
        this.utenteLog=val;
        this.utente.identificadore=val;
        this.storage.get('userId').then((val1) => {
          this.utente.idUtente=val1;
          this.model.utente=this.utente;
        });
      });
      alert('Operazione non Fatta, ti prego di rifarla')
    }
  }

  svuotaForm(){
    this.model.numero_ore=0;
    this.model.date=moment(this.oggi).format("YYYY-MM-DD");
    this.listaPostiLavoro.forEach(element => {
      element.isChecked=false
    });
  }

  
  AggiornaOra(){
    this.tagliaCleanServices.getOre()
    .subscribe(fruits=>{
      this.ore =fruits;
      this.totalOre=0;
      this.ore.forEach(element => {
        if(element && element.utente && element.utente.identificadore===this.utenteLog){
          let newDate= new Date(element.date);
          let meseCorrente= this.oggi.getMonth()+1;
          let meseElement =newDate.getMonth()+1
          if( meseCorrente === meseElement ){
            this.totalOre=this.totalOre + element.numero_ore;
          }
          
        }
      });
      this.euro=this.totalOre * 6.5;
    });
 

    
  }

  get_utente(){
    this.storage.get('email').then((val) => {
      this.utenteLog=val;
      this.utente.identificadore=val;
      this.storage.get('userId').then((val1) => {
        this.utente.idUtente=val1;
        this.model.utente=this.utente;
        this.AggiornaOra();
      });
    });
  }


  initComponent(){
    this.oggi = new Date();
    this.model.date = moment(this.oggi).format("YYYY-MM-DD");
    this.tagliaCleanServices.getPostiLavoro()
    .subscribe(fruitsw=>{
      this.listaPostiLavoro =fruitsw;
      this.listaPostiLavoro.forEach(element => {
        element.isChecked=false
      });
    });

    this.get_utente();

  }

  ionViewDidEnter(){
    this.initComponent();
  }
}
