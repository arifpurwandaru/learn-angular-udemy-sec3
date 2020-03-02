import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnChanges {
  @Input() recipes: Recipe[] = [ ];
  @Input() recipe: Recipe;
 
  
  constructor() {
   }

   ngOnChanges(changes: SimpleChanges){
   }

  ngOnInit() {
  }

}
