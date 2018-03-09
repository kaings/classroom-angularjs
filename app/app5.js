var myProj1 = angular.module('myProj1',[]);

myProj1.controller('MyProj1Controller', ['$scope', function($scope){

  $scope.sports = [
    {
      name: 'swimming',
      level: 2,
      cost: 200
    },

    {
      name: 'badminton',
      level: 1,
      cost: 150
    },

    {
      name: 'tennis',
      level: 2,
      cost: 200
    },

    {
      name: 'marathon',
      level: 3,
      cost: 300
    },

    {
      name: 'basketball',
      level: 4,
      cost: 500
    }

  ];

}]);
