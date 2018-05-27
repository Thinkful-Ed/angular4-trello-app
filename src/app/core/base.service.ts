import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments';


@Injectable()
export class BaseService {
  baseUrl = environment.baseUrl;

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
