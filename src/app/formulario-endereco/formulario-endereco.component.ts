import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-endereco',
  templateUrl: './formulario-endereco.component.html',
  styleUrls: ['./formulario-endereco.component.css'],
})
export class FormularioEnderecoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cep = '';

  buscarCep() {
    var urlBuscarCep = 'https://viacep.com.br/ws/' + this.cep + '/json/';
    console.log(urlBuscarCep);
  }
}
