import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Contador App';
  numero : number = 10;
  numero2 : number = 20;
  numero3 : number = 30;
  numero4 : number = 40;
  bases : number = 5;
  //utilizando 2 metodos
  suma() {
    this.numero2 +=1;
  }
  resta (){
    this.numero2 -=1;
  }

  //utilizando 1 metodos
  sumaresta( valor : number){
    this.numero3 +=valor;
  }

  //tarea 
  acomulado (valor : number){
    this.numero4 += valor;
  }
}
