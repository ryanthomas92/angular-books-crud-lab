angular.module('libraryApp')
  .controller('AboutController', AboutController);

AboutController.$inject = []
function AboutController() {
  var vm = this;

  vm.name = "Ryan";
}
