import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-alunos.component.html',
  styleUrl: './consulta-alunos.component.css'
})
export class ConsultaAlunosComponent implements OnInit {

  alunos: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8082/api/alunos').subscribe({
      next: (data) => {
        this.alunos = data as any[];
      },
      error: (e) => {
        console.log(e.error);
      }
    });
  }
}
