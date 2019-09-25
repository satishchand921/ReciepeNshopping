import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a Test',
    'https://images.ctfassets.net/qu53tdnhexvd/36wMXS6bnGBlQvcEHGrwNw/143e73bdfb305fb701c08c8e5f5fa53e/Recipe-780x520-Lunch.jpg?fm=jpg&fl=progressive&q=60'),
    new Recipe('A  Recipe','This is  a potato bhujiya',
    'https://images.ctfassets.net/qu53tdnhexvd/36wMXS6bnGBlQvcEHGrwNw/143e73bdfb305fb701c08c8e5f5fa53e/Recipe-780x520-Lunch.jpg?fm=jpg&fl=progressive&q=60')
  ];
  @Output() recipeSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe)
  {
    this.recipeSelected.emit(recipe);
  }
}
