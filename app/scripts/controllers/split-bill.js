'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:SplitBillCtrl
 * @description
 * # SplitBillCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('SplitBillCtrl', function ($scope) 
  {
  	$scope.sumOfValues = 0;

    // The items that you want to sum.
    $scope.addItem = [{ billAmount : '0' }];

    $scope.newItem = function($event)
    {
        $scope.addItem.push({ billAmount : '0' });
        $event.preventDefault();
    }

    $scope.onchange = function ($event, item) {
      console.log(item);
      console.log($scope.addItem.map(function (item) {
        return parseInt(item.billAmount, 10);
      }).reduce(function (prev, next) {
        return prev + next;
      }));
    };

    $scope.calculate = function() 
    {
    	$scope.roommatesCount = $scope.numOfRoommates;
    	$scope.selectValue = 100;

    	$scope.billSplited = $scope.selectValue / $scope.roommatesCount;

    	$scope.result = ("Cost per person: $ " + $scope.billSplited + $scope.test);
  	};

});