import { Component } from '@angular/core';

@Component({
    selector : 'app-contador',
    template : `
    <h1>OPERACION EN EL COMPONENTE</h1>
    <button (click)="acomu(10);">+10</button>
    <span>{{num}}</span>
    <button (click)="acomu(-10);">-10</button>
    `
})

export class contadorComponent{
num : number =50;

    acomu(par:number) {
    this.num +=par;
    }
}