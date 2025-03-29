import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, shareReplay } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})

export class Api2Service {

  constructor(private _http: HttpClient) { }

  // #http = Inject(HttpClient);
  #url = signal(environment.apiTask)  

  //inject não rolou!!!
  // public httpListTask$(): Observable<ITask[]>{    
  //   return this.#http.get<ITask[]>(this.#url());
  // }

  // via construtor sim ... =\
  public getTasks(): Observable<ITask[]> {
    //return this._http.get<ITask[]>(`${this.#url}`).pipe();
    return this._http.get<ITask[]>(this.#url())
    .pipe(shareReplay());
  }
}
