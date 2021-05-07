import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  ele : string='';
  constructor() { }
    heroes : string[]=['Juan','Pedro','Francisco','Sofia'];
   
    borrarHeroe(){
      this.ele =this.heroes.shift() || '' ;
    }
  ngOnInit(): void {
  }

}
