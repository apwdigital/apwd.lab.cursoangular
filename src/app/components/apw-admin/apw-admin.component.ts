import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-apw-admin',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './apw-admin.component.html',
  styleUrl: './apw-admin.component.scss'
})
export class ApwAdminComponent {

  public modulos: Array<{ descricao: string }> = [
    { descricao: 'Revisão Angular' },
    { descricao: 'Componentes' },
    { descricao: 'Estillos CSS' },
    { descricao: 'Templates' },
    { descricao: 'Control Flow' },
    { descricao: 'Deferrable Views' },
    { descricao: 'Signal' },
    { descricao: 'Projeto Portifólio' },
    { descricao: 'Comunicação entre componentes' },
    { descricao: 'Pipes' },
    { descricao: 'Projeto Lista de tarefas' },
    { descricao: 'Template driven forms' },
    { descricao: 'Reactive Forms' },
    { descricao: 'Componentes avançados' },
    { descricao: 'Variáveis de ambiente' },
    { descricao: 'Services' },
  ];

  public logsAtividades: Array<{ data: string, descricao: string }> = [
    { data: '2025-03-18', descricao: 'Pipes, Projeto Lista de tarefas' },
    { data: '2025-03-17', descricao: 'Review' },
    { data: '2025-03-15', descricao: 'Componentes, Estilos CSS, Templares, Control Flow, Deferrable' },
    { data: '2025-03-14', descricao: 'Projeto Portifólio' },
    { data: '2025-03-18', descricao: 'Comunicação entre componentes, Pipes, Projeto Lista de tarefas' },
    { data: '2025-03-20', descricao: 'Projeto Lista de tarefas' },
    { data: '2025-03-20', descricao: 'Template driven forms' },
    { data: '2025-03-22, 25 e 28', descricao: 'Reactive Forms' },
    { data: '2025-03-28', descricao: 'Componentes avançados' },
    { data: '2025-03-28', descricao: 'Variáveis de ambiente' },   
    { data: '2025-03-28', descricao: 'Services' },
    { data: '2025-03-29', descricao: 'Rotas' },
  ];
}

//https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
// ng g c components/forms/template-driven-forms
// ng g c components/forms/reactive-forms