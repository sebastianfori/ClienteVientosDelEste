import { Injectable } from '@angular/core';
import { BaseGenericService } from '../api/base-generic.service';
import { LoginControllerService } from './login-controller.service';

@Injectable({
  providedIn: 'root'
})
export class BaseGenericControllerService<T, K> {

  constructor(protected service: BaseGenericService<T, K>, protected auth: LoginControllerService) { }

  public async getAll(): Promise<T[]> {
    let payload = await this.service.getAll();
    this.auth.token = payload.token;
    return payload.data;
  }

  public async getMany(filter: K): Promise<T[]> {
    let payload = await this.service.getMany(filter);
    this.auth.token = payload.token;
    return payload.data;
  }

  public async getOne(id: number): Promise<T> {
    let payload = await this.service.getOne(id);
    this.auth.token = payload.token;
    return payload.data;
  }

  public async create(data: T): Promise<T> {
    let payload = await this.service.create(data);
    this.auth.token = payload.token;
    return payload.data;
  }

  public async update(id: number, data: T): Promise<T> {
    let payload = await this.service.update(id, data);
    this.auth.token = payload.token;
    return payload.data;
  }

  public async remove(id: number): Promise<number> {
    let payload = await this.service.remove(id);
    this.auth.token = payload.token;
    return 1;
  }

  public async total(): Promise<number> {
    let payload = await this.service.total();
    this.auth.token = payload.token;
    return payload.data;
  }
}
