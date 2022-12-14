import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fromPromise } from '../timed-promise';
import { APIPayload } from '../types/api-payload.type';

@Injectable({
  providedIn: 'root'
})
export class BaseGenericService<T, K> {
  protected endpointUrl = environment.api.url;

  constructor(protected http: HttpClient) { }

  public async getAll(): Promise<APIPayload<T[]>> {
    console.log('getAll');
    console.log(this.endpointUrl);
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.get(this.endpointUrl).subscribe({
          next: (data: any) => {
            resolve(new APIPayload(data.data, data.token));
          },
          error: (error: any) => {
            reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
          }
        });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }

  public async getMany(filter: K): Promise<APIPayload<T[]>> {
    console.log('getMany');
    console.log(this.endpointUrl + '/search');
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.post(this.endpointUrl + '/search', filter).subscribe({
            next: (data: any) => {
              console.log(data);
              resolve(new APIPayload(data.data, data.token));
            },
            error: (error: any) => {
              reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
            }
          });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }

  public async getOne(id: number): Promise<APIPayload<T>> {
    console.log('getOne');
    console.log(this.endpointUrl + '/' + id);
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.get(this.endpointUrl + '/' + id).subscribe({
          next: (data: any) => {
            resolve(new APIPayload(data.data, data.token));
          },
          error: (error: any) => {
            reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
          }
        });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }

  public async create(entity: T): Promise<APIPayload<T>> {
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.post(this.endpointUrl, entity).subscribe({
          next: (data: any) => {
            resolve(new APIPayload(data.data, data.token));
          },
          error: (error: any) => {
            reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
          }
        });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }

  public async update(id: number, entity: T): Promise<APIPayload<T>> {
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.put(this.endpointUrl + '/' + id, entity).subscribe({
          next: (data: any) => {
            resolve(new APIPayload(data.data, data.token));
          },
          error: (error: any) => {
            reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
          }
        });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }

  public async remove(id: number): Promise<APIPayload<boolean>> {
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.delete(this.endpointUrl + '/' + id).subscribe({
          next: (data: any) => {
            resolve(new APIPayload(true, data.token));
          },
          error: (error: any) => {
            reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
          }
        });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }

  public async total(): Promise<APIPayload<number>> {
    return fromPromise(
      new Promise((resolve, reject) => {
        this.http.get(this.endpointUrl).subscribe({
          next: (data: any) => {
            resolve(new APIPayload(data.data.length, data.token));
          },
          error: (error: any) => {
            reject(new Error(error.statusText + ' (' + error.status + ')' + error.message));
          }
        });
      }),
      environment.requestTimeout,
      new Error('Request timed out')
    );
  }


}