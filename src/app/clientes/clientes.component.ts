import { Component, OnInit } from '@angular/core';
import { CLIENTES } from "../clientes/clientes.json";
import { Icliente } from "../clientes/icliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Icliente[];

  constructor() { }

  ngOnInit() {

    this.clientes = CLIENTES;


  }

}
