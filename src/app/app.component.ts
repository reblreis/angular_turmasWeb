import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { EdicaoAlunosComponent } from './edicao-alunos/edicao-alunos.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultaAlunosComponent, CadastroAlunosComponent, EdicaoAlunosComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turmasWeb';
}
