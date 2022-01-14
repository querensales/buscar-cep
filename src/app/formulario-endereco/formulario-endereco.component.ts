import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnderecoModel } from '../models/endereco.model';

@Component({
  selector: 'app-formulario-endereco',
  templateUrl: './formulario-endereco.component.html',
  styleUrls: ['./formulario-endereco.component.css'],
})
export class FormularioEnderecoComponent implements OnInit {
  constructor(private minhareq: HttpClient) {}
  ngOnInit(): void {}

  cep!: string;
  endereco!: EnderecoModel;

  buscarCep() {
    var urlBuscarCep = `https://viacep.com.br/ws/${this.cep}/json/`;
    console.log(urlBuscarCep);

    var resultado = this.minhareq.get<EnderecoModel>(urlBuscarCep);
    resultado.subscribe((end) => (this.endereco = end));
  }
}
