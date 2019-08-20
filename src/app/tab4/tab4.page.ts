import { Component } from '@angular/core';
import { TagliaCleanServiceService } from '../taglia-clean-service.service';
import { NullAstVisitor } from '@angular/compiler';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})


export class Tab4Page {
  utenteLog;
  utente = {
    "idUtente":null,
    "identificadore":null,
  }
  
  constructor(public tagliaCleanServices:TagliaCleanServiceService,public storage: Storage) {
    
  }

  listaUtente=[];
  listaArrayOre=[];
  listaForMese=[];
  ore:any;
  oggi=new Date();
  meseCorrente;
  
  listaOre(){
    this.tagliaCleanServices.getOre()
    .subscribe(fruits=>{
      this.ore=fruits;
      console.log(this.ore);
      this.ore.forEach(element => {
        if(element && element.utente && element.utente.identificadore){
          const result = this.listaUtente.filter(utente => utente === element.utente.identificadore);
          result.length===0 ? this.listaUtente.push(element.utente.identificadore):'';
        }
      });
      // this.clasificaOre();
      this.filterRecordsForMese();
    });
  }

  // clasificaOre(){
  //   let totalOre=0;
  //   this.listaArrayOre=[];
  //   this.listaUtente.forEach(element => {
  //     let result = this.ore.filter(element2 => 
  //       element2.utente.identificadore === element &&
  //       new Date(element2.date).getMonth()+1===this.oggi.getMonth());
  //       result['total-ore']=0;
  //       result.forEach(element => {result['total-ore']=result['total-ore'] + element.numero_ore});
  //       result['total-euro']=result['total-ore'] * 6.5;
  //       result.length===0 ? '': this.listaArrayOre.push(result);
  //   });
  // }




  // public filterForUtenti(){
  //   let listaRecordForUtenti=[];

  //   this.listaForMese.forEach(forMese => {
  //     this.listaUtente.forEach(element => {
  //       let result = forMese.records.filter(element2 => 
  //         element2.utente.identificadore === element);
  //         result['total-ore']=0;
  //         result.forEach(element => {result['total-ore']=result['total-ore'] + element.numero_ore});
  //         result['total-euro']=result['total-ore'] * 6.5;
  //         result.length===0 ? '': this.listaArrayOre.push(result);
  //     });
  //   });
  // }

  public filterForUtenti(listaForMese){
    let listaRecordForUtenti=[];

    if (listaForMese.length > 0) {
      this.listaUtente.forEach(element => {
        let result = listaForMese.filter(element2 =>
          element2.utente.identificadore === element);
        result['total-ore'] = 0;
        result.forEach(element => { result['total-ore'] = result['total-ore'] + element.numero_ore });
        result['total-euro'] = result['total-ore'] * 6.5;
        result.length === 0 ? '' : listaRecordForUtenti.push(result);

      });
    
    }
    return listaRecordForUtenti

  }



  public filterRecordsForMese(){
    //obtengo el mes justo por cada record
    this.listaForMese=[];
    this.tagliaCleanServices.mese.forEach(element => {
      const result = this.ore.filter(record => new Date(record.date).getMonth() + 1 === element.id && new Date(record.date).getFullYear() === new Date().getFullYear());
      this.listaForMese.push(
        {
          "Mese": element['nome'],
          "records": this.filterForUtenti(result),
        })
    });

    console.log(this.listaForMese);

  }


  ionViewDidEnter(){
    let meseCorrente= this.oggi.getMonth();
    let annoCurrent=this.oggi.getUTCFullYear();
    const result = this.tagliaCleanServices.mese.filter(mes => mes.id === meseCorrente);
    this.meseCorrente=result[0].nome+" "+annoCurrent;
    this.listaOre();
    this.storage.get('email').then((val) => {
      this.utenteLog=val;
      this.utente.identificadore=val;
    });
  }
}
