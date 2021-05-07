import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'

import { heroeComponent } from './heroe/heroe.componet';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations : [
        heroeComponent,
        ListadoComponent
    ],
    exports : [
        ListadoComponent
    ],
    imports : [
        CommonModule
    ]
})


export class heroesModule {

}