import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { CategoriesComponent } from './views/CustomerCategories/categories/categories.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'customer-categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
