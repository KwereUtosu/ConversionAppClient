import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TeacherRequest} from '../pages/models/teacher-request';

@Injectable()
export class ConversionService {
  private baseUrl = `http://a1e4abeaa5b1f413d94035dbc8ec5f74-1129427492.us-east-1.elb.amazonaws.com/unit-conversion/convert/`;

  constructor(private http: HttpClient) {}

  isValid(payload: TeacherRequest, measurement: string): Observable<any> {
    return this.http.post(this.baseUrl + measurement, payload).pipe(
      map(res => res)
    );
  }

  isValidVolume(payload: TeacherRequest): Observable<any> {
    return this.http.post(this.baseUrl + 'volume', payload).pipe(
      map(res => res)
    );
  }

}
