var app = angular.module('rsProfile', []);

app.controller('indexCtrl', function($scope, $http) {
  if (localStorage.getItem("rsQuests")) {
    $scope.rsQuests = JSON.parse(localStorage.getItem("rsQuests")).quests;
  }

  $scope.getLinks = function() {
    $scope.rsQuestsUrl = "https://apps.runescape.com/runemetrics/quests?user="+$scope.nickname;
  }
  
  $scope.loadData = function() {
    $scope.rsQuestsUrl = null;
    $scope.rsQuests = JSON.parse($scope.rawData).quests;
    localStorage.setItem("rsQuests", $scope.rawData);
  }

  $scope.filter = function(quest) {
    if (quest.status == "COMPLETED" && $scope.completed_filter) {
      return true;
    } else if (quest.userEligible && $scope.eligible_filter) {
      return true;
    } else {
      return false;
    }
  }
});
