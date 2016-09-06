angular.module('controllers').controller('ArticlesController', [ '$scope', 'Article', function ($scope, Article) {
  console.log('in article controller')

  $scope.articles = Article.query();
}])
