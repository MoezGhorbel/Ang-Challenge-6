import { Component } from '@angular/core';
import { Actor } from '../actor/model/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  listActors: Actor[] = [
    { 'lastName': 'Robert', 'firstName': 'Julia' },
    { 'lastName': 'Walker', 'firstName': 'Paul' },
    { 'lastName': 'Pitt', 'firstName': 'Brad' }
  ];
  favorites: Actor[] = [];

  removeFromList(actor: Actor) {
    const index = this.listActors.indexOf(actor);
    this.listActors.splice(index, 1);
  }

  addToFavorites(actor: Actor) {
    if (!this.favorites.includes(actor)) {
      this.favorites.push(actor);
    }
  }

  removeFromFavorites(actor: Actor) {
    const index = this.favorites.indexOf(actor);
    this.favorites.splice(index, 1);
  }

}
