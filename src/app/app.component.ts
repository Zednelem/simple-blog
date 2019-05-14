import {Component} from '@angular/core';
import {Post} from './commons/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Open Classroom';
  subtitle = 'posts';
  posts: Array<Post> = [
    new Post(
      'Mon premier post',
      'votre AppComponent contiendra l\'array des posts, et il le passera à un component ' +
      'PostListComponent',
      3,
    ),
    new Post(
      'Mon second post',
      'votre PostListComponent affichera un PostListItemComponent pour chaque post dans ' +
      'l\'array qu\'il a reçu',
      -1,
    ),
    new Post(
      'Encore un post', 'chaque PostListItemComponent affichera le titre, le contenu et la date de création du ' +
      'post dans le template',
      0),
    new Post(
      'Mon dernier post', 'les PostListItemComponent auront des boutons qui permettent d\'augmenter et de ' +
      'diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n\'a pas besoin ' +
      'd\'être remontée au component parent',
      1
    )
  ];
}
