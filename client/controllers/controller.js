var app = angular.module('demoApp', []);
app.controller('appController', function($scope, $http, $filter){
	console.log("Hello From Controller");
	
	var refresh = function(){
		$http.get('/informationSystem').then(function(response){
			console.log("I got the requested data");
			$scope.informationSystem = response.data;
			$scope.name = {};
		});
	};

	refresh();

	$scope.add = function(){
		console.log($scope.name);
		$http.post('/informationSystem', $scope.name).then(function(res){
			console.log(res);
			refresh();
		});
	};
	
});