import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TagliaCleanServiceService } from '../taglia-clean-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  utenteLog;
  utente = {
    "idUtente":null,
    "identificadore":null,
  }
  ore=[];
  totalOre
  oggi = new Date();
  meseCorrente:string="";

   
  
constructor(public alertController: AlertController, public tagliaCleanServices:TagliaCleanServiceService, public storage: Storage){

}
async presentAlertConfirm(event) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Sei sicuro di proseguire con la cancelazione?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.deleteOre(event.key)
        }
      }
    ]
  });

  await alert.present();
}

idList(){

}

AggiornaOra(){
  this.tagliaCleanServices.getOre()
  .subscribe(fruits=>{
    console.log(fruits);
    this.loadLista(fruits);
    // this.tagliaCleanServices.getOreId().subscribe(ids=>{
    //   this.innerLista(fruits,ids)
    // })
  });
}
innerLista(ore,ids){
  console.log(ore);
  console.log(ids);
  ids.forEach((element, index) => {
    ore[index]['key']=element.key;
  });
  this.loadLista(ore);
}

loadLista(ore){
    this.ore=[];
    this.totalOre=0;
    let meseCorrente= this.oggi.getMonth()+1;
    let annoCurrent=this.oggi.getUTCFullYear();
    const result = this.tagliaCleanServices.mese.filter(mes => mes.id === meseCorrente);
    this.meseCorrente=result[0].nome+" "+annoCurrent;
    ore.forEach(element => {
      if(element.utente.identificadore===this.utenteLog){
        let newDate= new Date(element.date);
        let meseElement =newDate.getMonth()+1
        if(meseElement===meseCorrente){
          this.ore.push(element);
        }
      }
    });
    this.ore=this.orderByDate(this.ore);
}

orderByDate(ore){
  var sorted = ore.sort((a: any, b: any) => {
    let aDate=new Date(a.date)
    let bDate=new Date(b.date)
    return aDate.getTime() - bDate.getTime();
});
  return sorted
}


ionViewDidEnter(){
  this.storage.get('email').then((val) => {
    this.utenteLog=val;
    this.utente.identificadore=val;
    this.storage.get('userId').then((val1) => {
      this.utente.idUtente=val1;
      this.AggiornaOra();
    });
  });
}

deleteOre(key){
  this.tagliaCleanServices.delete(key);
}

}
