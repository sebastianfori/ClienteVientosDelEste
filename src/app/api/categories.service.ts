import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryFilter } from '../types/category-filter.type';
import { Category } from '../types/category.type';
import { BaseGenericService } from './base-generic.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseGenericService<Category, CategoryFilter> {
  constructor(protected override http: HttpClient) {
    super(http);
    this.endpointUrl = environment.api.url + environment.api.endpoints.categories;
  }
}