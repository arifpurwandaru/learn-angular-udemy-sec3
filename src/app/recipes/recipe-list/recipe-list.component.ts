import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() listKlikEmiter = new EventEmitter<number>()
  @Input() recipes: Recipe[] = [ ];
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onDetailClick(idx:number){
    
    this.listKlikEmiter.emit(idx);
  }

}
