import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name',{static: true}) nameRef: ElementRef;
  @ViewChild('amount',{static: true}) amountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  addItem(){
    const newIngredient = new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
 
  ngOnInit() {
  }

}
