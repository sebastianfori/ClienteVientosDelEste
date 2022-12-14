import { Injectable } from '@angular/core';
import { CategoriesService } from '../api/categories.service';
import { CategoryFilter } from '../types/category-filter.type';
import { Category } from '../types/category.type';
import { BaseGenericControllerService } from './base-generic-controller.service';
import { LoginControllerService } from './login-controller.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesControllerService extends BaseGenericControllerService<Category, CategoryFilter> {
  constructor(protected service2: CategoriesService, protected auth2: LoginControllerService) { 
    super(service2, auth2);
  }
}