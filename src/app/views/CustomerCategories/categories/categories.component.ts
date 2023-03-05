import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  cust_categories: any;
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this._categoryService.getCustomerCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.cust_categories = res.details;

        if (res.response.resp_code === '000') {
          console.log('It worked');
        } else {
          console.log(res.response.resp_desc);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
