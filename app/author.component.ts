import {Component} from 'angular2/core'
import {AuthorService} from './author.service';

// CSS Selector
// Template of the HTML that will be inserted
// *ngFor is like a common course
@Component({
  selector: 'authors',
  template: `<h2>Authors</h2>
  {{title}}
  <ul>
    <li *ngFor="#author of authorsList">
      {{ author }}
    </li>
  </ul>`,
  providers:[AuthorService]
})
export class AuthorComponent {
  title  = "The title of the course page";
  authorsList;

  constructor(aS: AuthorService) {
    this.authorsList = aS.getAuthors();
  }
}
