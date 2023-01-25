import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Actor } from './model/actor';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {

  @Input() public actor!: Actor;
  @Output() public remove = new EventEmitter();
  @Output() public favorite = new EventEmitter();
  @Output() public unfavorite = new EventEmitter();
  @Input() public isInFavorites!: boolean;
  
  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.favorite.emit(this.actor);
    } else {
      this.unfavorite.emit(this.actor);
    }
  }

  onRemove() {
    this.remove.emit(this.actor);
  }

}
