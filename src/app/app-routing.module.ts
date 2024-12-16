import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponentComponent } from './add-products-component/add-products-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [

  { path: 'add-product', component: AddProductsComponentComponent },
  { path:'**' , component: NotFoundComponentComponent },
  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

  
  
  
})


export class AppRoutingModule {}


