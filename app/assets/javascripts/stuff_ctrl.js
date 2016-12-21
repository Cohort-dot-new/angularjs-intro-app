/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.reviews = [
      {text: "Angular is cool!", rating: 5, reviewer: "Burton Wax"},
      {text: "Angular is bad!", rating: 2, reviewer: "Emily Post"},
      {text: "Angular is all right all right all riiight!", rating: 4, reviewer: "Matthew McConoghaauy"}
    ];

    $scope.addReview = function(inputText, inputRating, inputName) {
      var newReview = {text: inputText, rating: inputRating, reviewer: inputName};
      $scope.reviews.push(newReview);
    };

    $scope.isPositive = function(inputReview) {
      return (inputReview.text.indexOf("bad") === -1);
    };
  });

}());
