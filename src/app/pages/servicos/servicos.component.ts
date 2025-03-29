import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export default class ServicosComponent implements OnInit {
  #route = inject(ActivatedRoute)
  #router = inject(Router); // Aula Router Navigate

  // *** quando usa desta forma,não precisa do ngOnInit()
  public getId = signal<null | string>(null);
  @Input() set id(id: string) {
    this.getId.set(id);
  }
  // *** quando usa desta forma,não precisa do ngOnInit()

  ngOnInit(): void {
    
    //Router Navigate
    // 1 this.#router.navigate(['/'])
    setTimeout(() => this.#router.navigate(['/']), 3000);


    // ------------- get params
    console.log(this.#route.snapshot.params['id'])   
    
    //2ª forma de regate
    this.#route.params.subscribe((res) => console.log(res));
    this.#route.params.subscribe((res) => console.log(res['id']));

    //3ª forma avançada/atual
    // app.config => withComponentInputBinding() 
    // *** PS1: esta configuração altera o @Input para interpretar parâmetros de rota
    // obter propriedade public getId
    // *** PS2: configuração altera o @Input tanto para parâmetros de rota quanto parâmetros entre componentes
    
    // ------------- get queryParams
    // 1ª forma
    console.log(`name: ${this.#route.snapshot.queryParamMap.get('name')}`);
    console.log(`age: ${this.#route.snapshot.queryParamMap.get('age')}`);    
    
    // 2ª forma
    this.#route.queryParamMap.subscribe({
      next: (next) => {
        console.log(next.get('name'));
        console.log(next.get('age'));
      },
    });
  }
}
