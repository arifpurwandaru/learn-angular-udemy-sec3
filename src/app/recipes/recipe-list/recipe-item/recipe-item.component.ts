import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe("","","");
  @Input() idx:number = 0;
  @Output() detailEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  onDetailClick(idx:number){
    this.detailEmitter.emit(idx);
  }

}
