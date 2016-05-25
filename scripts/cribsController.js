angular
	.module('ngCribs')
	.controller('cribsController',function($scope,cribsFactory){

		$scope.cribs;

		/* initialize the initail search value */
		$scope.priceInfo ={
			min: 0,
			max:1000000
		}

		$scope.newLsitings={};

		/* creates new listing */
		$scope.addCrib = function(newLsitings){

			newLsitings.image="default-crib"
			$scope.cribs.push(newLsitings);
			$scope.newLsitings = {};
		}


		/* excutes callbacks based on the result of function   */
		cribsFactory.getCribs().success(function(data){
			$scope.cribs=data;
		}).error(function(error){
			console.log(error);
		});

	});
