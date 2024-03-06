import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-alunos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-alunos.component.html',
  styleUrl: './cadastro-alunos.component.css'
})
export class CadastroAlunosComponent {

  //método construtor
  constructor(
    private httpClient: HttpClient
  ){
  }

  //estrutura de formulário
  form = new FormGroup({
    nome : new FormControl('', [ Validators.required, Validators.minLength(8), Validators.maxLength(100) ]),
    matricula : new FormControl('', [ Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    cpf : new FormControl('', [ Validators.required, Validators.minLength(11), Validators.maxLength(11) ])
  });

  //função para auxiliar a exibição
  //das mensagens de erro de validação
  get f() {
    return this.form.controls;
  }

  //função para capturar o evento
  //SUBMIT do formulário
  onSubmit() : void {
    //enviando uma requisição POST para cadastrar o cliente na API
    this.httpClient.post('http://localhost:8082/api/alunos', 
       this.form.value, 
      { responseType: 'text' })
      .subscribe({
        next: (data) => {
          alert(data); //exibir a mensagem obtida da API
          this.form.reset(); //limpar os campos do formulário
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }
}
