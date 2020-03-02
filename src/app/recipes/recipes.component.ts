import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipes:Recipe[];
 
  recipe: Recipe=new Recipe('','','');

  constructor(private recipeService: RecipeService) { }

  onDetailClick(idx:number){
    this.recipe = this.recipes[idx];
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeEmitter
    .subscribe(
      (rcp:Recipe) => {
        this.recipe = rcp;
      }
    );
  }

}
