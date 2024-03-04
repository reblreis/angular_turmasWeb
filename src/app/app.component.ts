import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultaAlunosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turmasWeb';
}
