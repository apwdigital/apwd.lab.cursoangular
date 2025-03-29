import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JsonPipe } from '@angular/common';

export interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
}) //Injectable disponível para toda aplicação, eliminando a necessidade de provider

export class ApiService {
  // Formato novo
  public name = signal('APW Digital')

  // Formato  antigo
  public nome$ = new BehaviorSubject('APW Digital OLD');
  // nome$ = observable
  // BehaviorSubject compartilha dados entre componentes

  // Formato antigo
  constructor(private _http: HttpClient) { }

  // Formato novo
  #http = Inject(HttpClient);
  //#url = signal('https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks');
  #url = signal(environment.apiTask);

  //public httpListTask$(): Observable<Array<{ id: string, title: string }>> {
  //public httpListTask$(): Observable<Array<ITask>> {
  // public httpListTask$(): Observable<any> {
  //   //return this.#http.get<ITask[]>(this.#url);
  //   return this.#http.get<any>(this.#url());
  // }

  // public httpListTask$(): Observable<Array<{id: string; title: string; }>> {
  //   return this.#http.get<Array<{id: string; title: string; }>>(this.#url());
  // }


  public httpListTask$(): Observable<ITask[]> {
    console.log(`teste1==> ${this.#url()}`)    
    const teste = this._http.get<ITask[]>(this.#url());
    console.log(`teste2==> ${JSON.stringify(teste)}`)
    return teste;
  }


  // public httpListTask$(): Observable<ITask[]> {
    
  //   const teste = this.#http.get<ITask[]>(this.#url());
    
  //   console.log(`teste2==> ${JSON.stringify(teste)}`)

  //   return teste;
  // }


}
