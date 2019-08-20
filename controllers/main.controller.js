(function() {
  var app = angular.module("githubViewer");

  app.directive("validator", () => {
    return {
      restrict: "E",
      template: `
      <div class="alert alert-danger" ng-show="isTouched && !username">
        Input field is empty
      </div>
      `
    };
  });

  app.directive("search", () => {
    return {
      restrict: "E",
      template: `
      <input 
        required 
        type="search" 
        id="search" 
        ng-model="username" 
        class="form-control" 
        placeholder="Search a GitHub User..." 
        ng-click="touched()"/>`
    };
  });

  app.directive("btn", () => {
    return {
      restrict: "E",
      template: `
        <input 
          type="submit" 
          ng-click="search(username)" 
          value="Search" 
          class="btn btn-primary" 
          ng-disabled="!username"
        />`
    };
  });

  app.directive("main", () => {
    return {
      restrict: "E",
      template: `
        <form name="searchUser" class="form-group" ng-submit="search(username)">
          <search></search>
          <validator></validator>
        </form>
        <btn></btn>
      `
    };
  });

  var MainController = function($scope, $interval, $location) {
    $scope.search = function(username) {
      $location.path("/user/" + username);
    };

    $scope.touched = function() {
      $scope.isTouched = true;
    };
  };

  app.controller("controllers/main.controller", MainController);
})();
