import { Component } from '@angular/core';

@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})

export class heroeComponent{
nombre :  string =' Mujer Maravilla';
edad : number = 30;

get obtMayu () : string{
    return this.nombre.toUpperCase();
}

obtenerNombre() : string {
    return this.nombre;
}

mayus () : string{
    //return this.nombre + ' - ' + this.edad;
    //codigo javascript
    return ` ${this.nombre} - ${this.edad} `
}

cambiaNombre() : void {
    this.nombre = 'Flash';
}
cambiarEdad () : void {
    this.edad = 50;
}

}