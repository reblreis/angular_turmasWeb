import { Routes } from '@angular/router';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { ConsultaAlunosComponent } from './consulta-alunos/consulta-alunos.component';

export const routes: Routes = [
    {
        path: 'alunos-cadastro',
        component: CadastroAlunosComponent
    },
    {
        path: 'alunos-consulta',
        component: ConsultaAlunosComponent
    }
];
