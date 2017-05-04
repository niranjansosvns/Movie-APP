'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    css: 'view2.css'
  });
}])

 .controller('View2Ctrl', function($scope, $http, $q) {
    $scope.search = "Bridge of Spies";
     if(!$scope.details){
        var content = $q.defer();
        $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
        .then(function(response) {
        	content.resolve(response);
            $scope.details = response.data;
            return content.promise
          });
     }
     else  {
           $http.get('common/movie.json')
          .success(function (jsonFileData) {
           $scope.details  = jsonFileData;
          });
     }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });
