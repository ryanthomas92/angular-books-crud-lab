angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$routeParams', '$location', '$http'];
function BooksShowController($routeParams, $location, $http) {
  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function successCallback(response) {
    vm.book = response.data;
    console.log(vm.book);
  }, function errorCallback(error) {
    console.log("There was an error " + error);
  });

  vm.editBook = function(book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookId,
      data: {
        title: book.title,
        author: book.author,
        releaseDate: book.releaseDate,
        image: book.image
      },
    }).then(function successCallback(editedBook) {
      $location.path('/');
      console.log('here\'s the UPDATED data for book', bookId, ':', editedBook.data);
      vm.book = editedBook.data;
    }, function errorCallback(error) {
      console.log("There's an error " + error);
    });
  }

  vm.deleteBook = function(book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function successCallback(deletedBook) {
      $location.path('/');
    }, function errorCallback(error) {
      console.log("There's an error ", error);
    });
  }
};
