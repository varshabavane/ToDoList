import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.items = [
      {title:'aish', description:'birthday'}
    ]
    
    
  }

  save(item){
    alert("saveItems");
  }

  view(item){

    alert("viewItem");
  }

}
