var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  $http.get('js/json_data/phones.json').success(function(data){
  	$scope.phones = data;
  });

  $scope.name = "ari";
});