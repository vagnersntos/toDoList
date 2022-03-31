import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  url = 'http://localhost:3000/Tarefas';

  constructor(private httpClient: HttpClient) { }

  //headers
  httpOption = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
}
