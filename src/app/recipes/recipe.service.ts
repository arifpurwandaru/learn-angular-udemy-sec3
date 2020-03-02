import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeEmitter = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Ayam Kecap Spesial','Ayam kalasan diolah dengan bumbu spesial dan kecap khusus dari Kebumen yang sangat terkenal','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2056,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
        new Recipe('Tahu Sapi','Tahu Bacem isi daging sapi','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png'),
    
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getDetailRecipe(recipe:Recipe){
          this.recipeEmitter.emit(recipe);
      }
}