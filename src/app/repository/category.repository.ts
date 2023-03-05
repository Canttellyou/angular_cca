import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import CustomerCategoryModel, {
  CustomerCategoryFactory,
} from '../model/category.model';
@Injectable({
  providedIn: 'root',
})
export class CategoryRepository {
  constructor(private _httpClient: HttpClient) {}
  public getCustomerCategories = (): Observable<CustomerCategoryModel> => {
    return this._httpClient
      .get(`${environment.baseUrl}/get_customer_categories`)
      .pipe(map((res: any) => CustomerCategoryFactory.fromJson(res)));
  };
}
