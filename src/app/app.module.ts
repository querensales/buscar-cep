import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioEnderecoComponent } from './formulario-endereco/formulario-endereco.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { BuscarEnderecoComponent } from './buscar-endereco/buscar-endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioEnderecoComponent,
    ListaUsuariosComponent,
    BuscarEnderecoComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
