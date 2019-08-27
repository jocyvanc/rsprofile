var app = angular.module('rsProfile', []);

app.controller('indexCtrl', function($scope, $http) {
  $scope.getProfile = function() {
    $http.get("https://apps.runescape.com/runemetrics/quests?user="+$scope.nickname).then(function (response) {
      console.log(response);
    });
    $scope.status = "Online";
  }
});