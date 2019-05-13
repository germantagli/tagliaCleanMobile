import { Component } from '@angular/core';
import { TagliaCleanServiceService } from '../taglia-clean-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isAdmin=false;
  constructor(public auth:TagliaCleanServiceService, public storage: Storage) {
    this.get_utente();
  }
  get_utente(){
    this.storage.get('email').then((val) => {
      console.log(val);
        if(val==='admin@tagliaclean.com'){
          this.isAdmin=true;
        }
      });
    }
  
}
