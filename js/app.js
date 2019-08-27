$(document).foundation()

var app = angular.module('rsProfile', []);

app.controller('indexCtrl', function($scope, $http) {
  $scope.getLinks = function() {
    $scope.rsQuestsUrl = "https://apps.runescape.com/runemetrics/quests?user="+$scope.nickname;
  }
  
  $scope.loadData = function() {
    $scope.rsQuests = JSON.parse($scope.rawData).quests;
  }
});
