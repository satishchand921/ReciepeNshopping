import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AppComponent} from './app.component';
 
const routes: Routes = [
  
  {path:'recipes',component:RecipesComponent},
  {path:'shopping',component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
