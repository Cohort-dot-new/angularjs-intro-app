/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.myMessage = "Yo yo yo!";
    $scope.myName = "Peter";
    $scope.sum = 343 + 5353;
    $scope.reviews = ["Angular is cool!", "Angular is bad!", "Angular is all right all right all riiight"];

    $scope.addReview = function(inputText) {
      $scope.reviews.push(inputText);
    };

    $scope.isPositive = function(inputReviewText) {
      return (inputReviewText.indexOf("bad") === -1);
    };
  });

}());
