// controllers = angular.module('controllers')
angular.module('controllers').controller('ArticlesController', [ '$scope', function ($scope) {
  console.log('in article controller')

  $scope.articles = [
    {
      id: 1,
      name: 'Baked Potato w/ Cheese',
    },
    {
      id: 2,
      name: 'Garlic Mashed Potatoes',
    },
    {
      id: 3,
      name: 'Potatoes Au Gratin',
    },
    {
      id: 4,
      name: 'Baked Brussel Sprouts',
    },
  ];
}])
