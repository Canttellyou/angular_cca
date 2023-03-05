import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryRepository } from '../repository/category.repository';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _customerRepo: CategoryRepository) {}
  getCustomerCategories = () => {
    return this._customerRepo.getCustomerCategories();
  };
}
