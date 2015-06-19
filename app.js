var app = angular.module('app', []);

app.controller('CalculatorCtrl', ['$scope', function ($scope) {
	$scope.screen = 0;
	$scope.fresh = true;
	$scope.valueOne;
	var operator;

	$scope.clear = function(){
		$scope.valueOne = '';
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
		if(!$scope.valueOne){
			console.log('there was no valueone')
			$scope.valueOne = $scope.screen;
			$scope.fresh = true;
			operator = '+';
		} else{
			if(operator){
				console.log('there was a value one')
				console.log('there was an operator')
				$scope.screen = eval(($scope.screen) + (operator) + $scope.valueOne);
				$scope.valueOne = $scope.screen;
			}
			else{
				console.log('there was a value one')
				console.log('there was NOT an operator')
				$scope.screen = $scope.valueOne = eval($scope.valueOne + $scope.screen)
				$scope.valueOne = $scope.screen;
			}
			$scope.fresh = true;
			operator = '+';
		}
	};

	$scope.subtract = function(){
		if(!$scope.valueOne){
			$scope.valueOne = $scope.screen;
			$scope.fresh = true;
			operator = '-';
		} else{
			if(operator){
				$scope.screen = eval(($scope.valueOne) + (operator) + $scope.screen);
				$scope.valueOne = $scope.screen;
			}
			else{
				$scope.screen = $scope.valueOne = eval($scope.valueOne - $scope.screen)
				$scope.valueOne = $scope.screen;
			}

			$scope.fresh = true;
			operator = '-';
		}
	};

	$scope.multiply = function(){
		if(!$scope.valueOne){
			$scope.valueOne = $scope.screen;
			$scope.fresh = true;
			operator = '*';
		} else{
			if(operator){
				$scope.screen = eval(($scope.screen) + (operator) + $scope.valueOne);
				$scope.valueOne = $scope.screen;
			}
			else{
				$scope.screen = $scope.valueOne = eval($scope.valueOne * $scope.screen)
				$scope.valueOne = $scope.screen;
			}

			$scope.fresh = true;
			operator = '*';
		}
	};
	$scope.divide = function(){
		if(!$scope.valueOne){
			$scope.valueOne = $scope.screen;
			$scope.fresh = true;
			operator = '/';
		} else{
			if(operator){
				$scope.screen = eval(($scope.screen) + (operator) + $scope.valueOne);
				$scope.valueOne = $scope.screen;
			}
			else{
				$scope.screen = $scope.valueOne = eval($scope.valueOne / $scope.screen)
				$scope.valueOne = $scope.screen;
			}

			$scope.fresh = true;
			operator = '/';
		}
	};
	$scope.evaluate = function(){
		$scope.screen = eval(($scope.valueOne) + (operator) + $scope.screen);
		$scope.fresh = true;
		$scope.valueOne = '';
	};
}]);
