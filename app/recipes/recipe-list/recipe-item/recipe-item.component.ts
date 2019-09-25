import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {RecipeListComponent} from '../recipe-list.component'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeData : RecipeListComponent;
@Output() recipeSelected = new EventEmitter<string>();
 //reciptData = new RecipeListComponent().recipes;
  constructor() { }

  ngOnInit() {
  }
  onSelected()
  {
    this.recipeSelected.emit();
  }
}
