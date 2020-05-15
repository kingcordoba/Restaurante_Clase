import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { CalculadoraComponent } from '../app/calculadora/calculadora.component';


const routes: Routes = [
 {path:'', component:InicioComponent},
 {path:'products', component:ProductosComponent},
 {path:'domicilios', component:PedidosComponent},
 {path:'calculadora', component:CalculadoraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }