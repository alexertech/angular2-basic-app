# Angular2 Playground

This repo contains all the learning process for angular2, with a full working project ready to clone and lots of comments in the code. It's a "Work in Progress", so I will be adding all the information soon.

### Getting Started

Install NodeJS on your System so you can have NPM avialble. Then clone this repo and execute *npm install* and *npm start* to access the application.

### TODO
- Lots of features to come

### Current version
- V.1
  * Courses and Authors components
  * Courses and Authors services
  * Basic workspace

## Authors

* **Alex Barrios** [alexertech](https://github.com/alexertech)
* **Moshfegh Hamedani** "Programming with Mosh" YouTube Channel with the  [Tutorial](https://www.youtube.com/watch?v=_-CD_5YhJTA) for the first version of this project.

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the GNU General Public License V3.0 - see the [LICENSE.md](LICENSE.md) file for details.

Please if you use the project, say HI! in [twitter](http://twitter.com/alexertech) :)

### Key information about Angular2

An Angular2 app have 4 key players:

 - Components
 - Directives
 - Routers
 - Services

+ A component, encapsulate the template, data and the behavior of a view (view component).

Every angular app have a root component at least. Just as example, a component can be a navigation bar, sidebar, and main. Also they can contain multiple components.

Can be written as a simple classic object:
```
 export class ObjectComponent {
  attribute: number;
  method (value) {

  }
 }
```
One interesting thing to have in mind is that a component can't access directly to the DOM, so for that we must use a "bind":
```
  title = "Howdy"  -------->> <h1>howdy</h1>
```
The best thing about components is that they can be unit tested.

+ Services are the objects that can talk with thins like the DB (Mongo), Node or Whatever.

+ Routers are responsible for navigation

+ Directives is the piece of code that can talk with the DOM and add behavior. For example, a directive can add something like an autoGrow to a input element, and are a nice way to add personalization.
