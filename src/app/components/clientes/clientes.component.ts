import { Component, OnInit } from '@angular/core';
import { Icliente } from "../../interfaces/icliente";
import { ClientesService } from "../../services/clientes.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Icliente[];

  constructor( private _clientesService: ClientesService, private _router: Router) { }

  ngOnInit() {

    this.clientes = this._clientesService.getClientes();

  }

  consultarCliente(idCliente: string){
    console.log(idCliente);
    this._router.navigate(['cliente',idCliente]);

  }

}
