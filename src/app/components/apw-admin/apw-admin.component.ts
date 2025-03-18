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


  public logsAtividades: Array<{ data: string, descricao: string }> = [
    { data: '2025-03-18', descricao: 'Pipes, Projeto Lista de tarefas' },
    { data: '2025-03-17', descricao: 'Review' },
    { data: '2025-03-15', descricao: 'Componentes, Estilos CSS, Templares, Control Flow, Deferrable' },
    { data: '2025-03-14', descricao: 'Projeto Portifólio' }
  ];
}

//https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/