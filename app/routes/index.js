import Ember from 'ember';

var articles = [{
  id: 1,
  title: "bustle is a bad site",
  author: "anonymous",
  content: "lorem ipsum blah",
  image: "http://lorempixel.com/400/200/sports",
  tags: ["entertainment", "news"]
}, {
  id: 2,
  title: "Stuff is on the internet yo",
  author: "Otto",
  content: "lorem ipsum blah blah blah",
  image: "http://lorempixel.com/400/200/sports",
  tags: ["entertainment", "lifestyle"]
}, {
  id: 3,
  title: "People obsessed with collecting cats",
  author: "A yahoo answers user",
  content: "lorem ipsum blah blah meow meow",
  image: "http://lorempixel.com/400/200/sports",
  tags: ["news", "books"]
}];
export default Ember.Route.extend({
  model() {
    return articles;
  }
});
