import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  titulo:string = "Cadastro de Pessoas"

  constructor() { }

  ngOnInit(): void {
  }

}
