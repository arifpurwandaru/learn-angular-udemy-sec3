import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements 
    OnInit{
  @Input() recipe:Recipe;

  constructor() {
   }

   ngOnChanges(changes: SimpleChanges){
   }

  ngOnInit() {
  }
  ngAfterContentInit(){
  }

  ngAfterContentChecked(){

  }
  ngDoCheck(){

  }
  ngOnDestroy(){
  }

}
