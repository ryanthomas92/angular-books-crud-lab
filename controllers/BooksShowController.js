angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff 
//   - but you might need to add a dependency
BooksShowController.$inject=['$routeParams', '$location'];   
function BooksShowController($routeParams, $location) {
  var vm = this;
};
