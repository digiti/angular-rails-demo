angular.module('services').factory('Article', function($resource) {
  return $resource('/api/v1/articles/:id');
});
