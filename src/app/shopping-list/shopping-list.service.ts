import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

export class ShoppingListService{
    ingredientsEmitter = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
      ];

      getIngredient(){
          return this.ingredients.slice();
      }

      onAddEvent(ing:Ingredient){
          this.ingredients.push(ing);
          this.ingredientsEmitter.emit(this.ingredients.slice());
      }

}