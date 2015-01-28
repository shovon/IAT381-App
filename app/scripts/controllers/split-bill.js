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
    $scope.addItem = [{ billAmount : $scope.test }];


    $scope.test = $scope.addItem.billAmount;

    $scope.newItem = function($event)
    {
        $scope.addItem.push({ billAmount : $scope.test });
        $event.preventDefault();
    }


    $scope.calculate = function() 
    {
    	$scope.roommatesCount = $scope.numOfRoommates;
    	$scope.selectValue = 100;

    	$scope.billSplited = $scope.selectValue / $scope.roommatesCount;

    	$scope.result = ("Cost per person: $ " + $scope.billSplited + $scope.test);
  	};

});