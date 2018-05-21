import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class BaseService {
  baseUrl = "http://localhost:8080/api";

}
