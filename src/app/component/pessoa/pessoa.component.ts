import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  titulo:string = "Pessoas"
  pessoaList:Pessoa[] = [];

  constructor() { }

  ngOnInit(): void {

    this.pessoaList.push(
      { id: 1, nome: "Maria", cpf: "987.132.465-09" },
      { id: 2, nome: "João", cpf: "111.222.333-44" },
      { id: 3, nome: "Camila", cpf: "999.999.999-54" },
    )

  }
}
