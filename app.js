(function() {
  var app = angular.module("githubViewer", ["ngRoute", "ngAnimate"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "views/main.view.html",
        controller: "controllers/main.controller"
      })
      .when("/user/:username", {
        templateUrl: "views/user.view.html",
        controller: "controllers/user.controller"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "views/repo.view.html",
        controller: "controllers/repo.controller"
      })
      .otherwise({ redirectTo: "/main" });
  });
})();
