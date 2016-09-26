(function () {
'use strict';
angular.module('LunchChecker',[])
 .controller('LunchItemCounterController',LunchItemCounterController);

LunchItemCounterController.$inject = ['$scope'];
function LunchItemCounterController($scope){
$scope.lunchOrder="";
$scope.checkLunchItems = function() {

  if($scope.lunchOrder){
    var itemCounter = $scope.lunchOrder.split(",");
    if (itemCounter.length > 3) {
      $scope.message = "Too much!";
    }
    else{
      $scope.message = "Enjoy!";
    }
  }
  else {
    $scope.message = "Please enter data first!";
  }
};
}
})();
