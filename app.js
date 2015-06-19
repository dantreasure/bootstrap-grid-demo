var app = angular.module('app', []);

app.controller('CalculatorCtrl', ['$scope', function ($scope) {
	$scope.screen = 0;

	$scope.fresh = true;
	$scope.storedValue;
	var operator;

	var logger = function(){
		console.log($scope.fresh)
		console.log($scope.storedValue)
		console.log($scope.operator)
	}

	$scope.clear = function(){
		$scope.storedValue = '';
		$scope.screen = 0;
		$scope.fresh = true;
	}

	$scope.input = function(arg){
		if($scope.fresh){
			$scope.screen = arg;
			$scope.fresh = false;
		} else{
			$scope.screen = $scope.screen.toString() + arg.toString()
		}
	}

	$scope.add = function(){
		if(!$scope.storedValue){
			$scope.storedValue = $scope.screen;
			$scope.fresh = true;
			operator = '+';
		} else{
			if(operator){
				console.log('there was a value one')
				console.log('there was an operator')
				$scope.screen = eval(($scope.screen) + (operator) + $scope.storedValue);
				$scope.storedValue = $scope.screen;
			}
			else{
				console.log('there was a value one')
				console.log('there was NOT an operator')
				$scope.screen = $scope.storedValue = eval($scope.storedValue + $scope.screen)
				$scope.storedValue = $scope.screen;
			}
			$scope.fresh = true;
			operator = '+';
		}
	};

	$scope.subtract = function(){
		if(!$scope.storedValue){
			$scope.storedValue = $scope.screen;
			$scope.fresh = true;
			operator = '-';
		} else{
			if(operator){
				$scope.screen = eval(($scope.storedValue) + (operator) + $scope.screen);
				$scope.storedValue = $scope.screen;
			}
			else{
				$scope.screen = $scope.storedValue = eval($scope.storedValue - $scope.screen)
				$scope.storedValue = $scope.screen;
			}

			$scope.fresh = true;
			operator = '-';
		}
	};

	$scope.multiply = function(){
		if(!$scope.storedValue){
			$scope.storedValue = $scope.screen;
			$scope.fresh = true;
			operator = '*';
		} else{
			if(operator){
				$scope.screen = eval(($scope.screen) + (operator) + $scope.storedValue);
				$scope.storedValue = $scope.screen;
			}
			else{
				$scope.screen = $scope.storedValue = eval($scope.storedValue * $scope.screen)
				$scope.storedValue = $scope.screen;
			}

			$scope.fresh = true;
			operator = '*';
		}
	};
	$scope.divide = function(){
		if(!$scope.storedValue){
			$scope.storedValue = $scope.screen;
			$scope.fresh = true;
			operator = '/';
		} else{
			if(operator){
				$scope.screen = eval(($scope.screen) + (operator) + $scope.storedValue);
				$scope.storedValue = $scope.screen;
			}
			else{
				$scope.screen = $scope.storedValue = eval($scope.storedValue / $scope.screen)
				$scope.storedValue = $scope.screen;
			}

			$scope.fresh = true;
			operator = '/';
		}
	};
	$scope.evaluate = function(){
		$scope.screen = eval(($scope.storedValue) + (operator) + $scope.screen);
		$scope.fresh = true;
		$scope.storedValue = '';
	};
}]);
