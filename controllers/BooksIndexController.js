angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

// add your BooksIndexController function here!
// don't forget $http if you need to make requests

BooksIndexController.$inject=['$http'];

function BooksIndexController ($http) {
  console.log("coolio ");
  var vm = this;
  var newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log(vm.books);
  }, function errorCallback(error) {
    console.log("There was an error " + error);
  });
}
