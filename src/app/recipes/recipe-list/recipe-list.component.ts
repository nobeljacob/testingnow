import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[]=[

new Recipe('A test Recipe','This is a test','assets/600px-Recipe_logo.jpeg')    
  ];

  constructor() { }

  ngOnInit() {
  }

}
