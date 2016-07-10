import {Component} from 'angular2/core'
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

// CSS Selector
// Template of the HTML that will be inserted
// *ngFor is like a common course
@Component({
  selector: 'courses',
  template: `<h2>Courses</h2>
  {{title}}
  <p>Add a course: <input type="text" autoGrow /></p>
  <ul>
    <li *ngFor="#course of coursesList">
      {{ course }}
    </li>
  </ul>`,
  providers:[CourseService],
  directives:[AutoGrowDirective]
})
export class CoursesComponent {
  title  = "The title of the course page";
  coursesList;

  constructor(cs: CourseService) {
    this.coursesList = cs.getCourses();
  }
}
