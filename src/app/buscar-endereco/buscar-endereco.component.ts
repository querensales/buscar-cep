import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-endereco',
  templateUrl: './buscar-endereco.component.html',
  styleUrls: ['./buscar-endereco.component.css']
})
export class BuscarEnderecoComponent implements OnInit {
  cep: string = '';
  enderecoCompleto: any = {};
  constructor(private requisicaoHttp: HttpClient) { }

  ngOnInit(): void {
  }

  buscarCep() {
    console.log(this.cep);
    let url = `https://viacep.com.br/ws/${this.cep}/json/`;
    this.requisicaoHttp.get(url)
      .subscribe(resultado => {
        console.log(resultado);
        this.enderecoCompleto = resultado;
      });
  }

}
