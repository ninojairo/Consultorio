import { Injectable } from '@angular/core';
import { CLIENTES } from "../../app/components/clientes/clientes.json";
import { Icliente } from "../interfaces/icliente";


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes : Icliente[];

  constructor() { 
    this.clientes = CLIENTES;
  }
  
  getClientes(): Icliente[]{
    return CLIENTES;
  }
}
