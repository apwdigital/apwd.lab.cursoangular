import { Component, inject, OnInit, signal } from '@angular/core';
import { Api2Service } from '../../services/api-2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consume-service2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service2.component.html',
  styleUrl: './consume-service2.component.scss'
})
export class ConsumeService2Component implements OnInit{

  #ApiService = inject(Api2Service);

    public getTask = signal<null | Array<{
      id: string;
      title: string;
    }>>(null);
    
    public getTask$ = this.#ApiService.getTasks();
  
  ngOnInit(): void {
    this.getTask$.subscribe({
      next: (data: any) => {        
        this.getTask.set(data);
      },      
      error: (error) => console.log(`error: ${error}`),
      complete: () => console.log("Complete!")
    })
  }

}
