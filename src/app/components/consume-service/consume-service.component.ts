import { Component, inject, OnInit, signal } from '@angular/core';
import { NewComponentComponent } from "../new-component/new-component.component";
import { ApiService } from '../../services/api.service';
import { NotExpr } from '@angular/compiler';
import { Api2Service } from '../../services/api-2.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss'
})
export class ConsumeServiceComponent implements OnInit {

  // Forma nova
  #ApiService = inject(Api2Service);

  // Forma antiga
  // constructor(
  //   private _apiService: ApiService
  // ){}

  // AULA 1
  // ngOnInit(): void {    
  //   //_apiService
  //   console.log(this.#ApiService.name());

  //   // formato antifo, com observable
  //   // const v1 = this.#ApiService.nome$
  //   // console.log(`v1 ${JSON.stringify(v1)}`);
  //   // console.log(`v1 ${v1.getValue()}`);


  //   // para obter o valor é precisso se inscrever
  //   this.#ApiService.nome$.subscribe({
  //     //next: tras o próximo valor
  //     next: (next) => console.log(`next: ${next}`),
  //     error: (error) => console.log(`error: ${error}`),
  //     complete: () => console.log("Complete!")
  //   })    
  // }

  public getTask = signal<null | Array<{
    id: string;
    title: string;
  }>>(null);

  ngOnInit(): void {
    console.log("##### INICIANDO CHAMADA 2 ...");

    // this.#ApiService.httpListTask$().subscribe({      
    //   next: (next) => console.log(`next: ${next}`),
    //   error: (error) => console.log(`error: ${error}`),
    //   complete: () => console.log("Complete!")
    // })

    this.#ApiService.getTasks().subscribe({
      next: (data: any) => {
        //console.log(`next: ${JSON.stringify(data, null, 2)}`)
        this.getTask.set(data);

      },
      // next: (data: Array<{id: string;
      //   title: string;}>) => console.log(`next: ${data}`),
      error: (error) => console.log(`error: ${error}`),
      complete: () => console.log("Complete!")
    })
  }
}
