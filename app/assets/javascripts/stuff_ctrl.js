/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.myMessage = "Yo yo yo!";
    $scope.myName = "Peter";
    $scope.sum = 343 + 5353;
    $scope.reviews = ["Hello", "goodbye", "fdsafsdadsfa"];

    $scope.addReview = function(inputText) {
      $scope.reviews.push(inputText);
    };
  });

}());
