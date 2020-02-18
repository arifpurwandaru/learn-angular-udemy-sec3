import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements 
    OnInit , 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    OnDestroy{
  @Input() recipe:Recipe;

  constructor() {
    console.log("=====================> constructor called");
   }

   ngOnChanges(changes: SimpleChanges){
    console.log("=====================> ngOnChanges called: ");
    console.log(changes);
   }

  ngOnInit() {
    console.log("=====================> ngOnInit called");
  }
  ngAfterContentInit(){
    console.log("=====================> ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("=====================> ngAfterContentChecked called");

  }
  ngDoCheck(){
    console.log("=====================> ngDoCheck called");

  }
  ngOnDestroy(){
    console.log("=====================> ngOnDestroy called");
  }

}
