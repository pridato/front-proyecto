import { Routes } from "@angular/router";
import { ComidasComponent } from "./Comidas/comidas.component";
import { DetallecomidaComponent } from "./Comidas/DetalleComida/detallecomida.component";


export const COMIDA_ROUTES: Routes = [
    { path: 'Comidas', component: ComidasComponent},
    {path: ':id', component: DetallecomidaComponent}
]