import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class BaseService {
  baseUrl = "https://silly-poitras-00f141.netlify.com/api";

}
