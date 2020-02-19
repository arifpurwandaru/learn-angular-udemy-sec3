import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ayam Kecap Spesial','Ayam kalasan diolah dengan bumbu spesial dan kecap khusus dari Kebumen yang sangat terkenal','https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2056,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('Tahu Sapi','Tahu Bacem isi daging sapi','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png'),

  ];
  recipe: Recipe=new Recipe('','','');

  constructor() { }

  onDetailClick(idx:number){
    this.recipe = this.recipes[idx];
  }
  ngOnInit() {
  }

}
