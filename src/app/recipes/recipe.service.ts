import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeEmitter = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Ayam Kecap Spesial',
        'Ayam kalasan diolah dengan bumbu spesial dan kecap khusus dari Kebumen yang sangat terkenal','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2056,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            [
                new Ingredient('Ayam Kalasan',2),
                new Ingredient('Kecap Kentjana',1),
                new Ingredient('Bawang Bombai',1),
                new Ingredient('Lada Hitam',2)

            ]),
        new Recipe('Tahu Sapi',
            'Tahu Bacem isi daging sapi','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png',
                [
                    new Ingredient('Daging Sapi',1),
                    new Ingredient('Tahu',5),
                    new Ingredient('Kecap Kentjana',1),
                    new Ingredient('Daun Bawang',3)
                ]),
    
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getDetailRecipe(recipe:Recipe){
          this.recipeEmitter.emit(recipe);
      }

      addIngredientsToShoppingList(ings:Ingredient[]){
        this.slService.addIngredients(ings);
      }
}