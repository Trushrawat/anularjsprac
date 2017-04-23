var myNinjaApp=angular.module('myNinjaApp',['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'views/home.html'
  })
  .when('/dir',{
    templateUrl:'views/dir.html',
    controller:'NinjaController'
  }).otherwise({
    redirectTo:'/home'
  })


}]);

myNinjaApp.controller('NinjaController',[ '$scope','$http',function($scope,$http){

  $scope.removeninja=function(ninja){
    var removed=$scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removed,1);

  };
 $scope.addninja=function() {


    $scope.ninjas.push({
      name:$scope.newninja.name,
      belt:$scope.newninja.belt,
      rate:$scope.newninja.rate,
      available:true
    });
    $scope.newninja.name="";
      $scope.newninja.belt="";
        $scope.newninja.rate="";

  };

$http.get('data/ninjas.json').then(function(data){
  $scope.ninjas=data;
});



}]);
