(function () {

    var categoryModule = angular.module('category', ['ngMaterial']);

    categoryModule.service('categoryService', ['$q', function ($q) {
        var categoriesArr = [
          {
              name: 'Popular on YouTube',
              avatar: 'svg-1',
              content: ''
          },
          {
              name: 'Music',
              avatar: 'svg-1',
              content: ''
          },
          {
              name: 'Sports',
              avatar: 'svg-1',
              content: ''
          },
          {
              name: 'Gaming',
              avatar: 'svg-1',
              content: ''
          },
          {
              name: 'News',
              avatar: 'svg-1',
              content: ''
          },
          {
              name: 'Live',
              avatar: 'svg-1',
              content: ''
          },
          {
              name: '360° Video',
              avatar: 'svg-1',
              content: ''
          }
        ];

        // Promise-based API
        return {
            getAllCategories: function () {
                // Simulate async nature of real remote calls
                return $q.when(categoriesArr);
            }
        };
    }]);

    categoryModule.controller('categoryController',
        ['$scope', 'categoryService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            function ($scope, categoriesService, $mdSidenav, $mdBottomSheet, $log, $q) {

                $scope.selected = null;
                $scope.categories = [];
                $scope.selectCategory = function selectCategory(category) {
                    $scope.selected = angular.isNumber(category) ? $scope.categories[category] : category;
                };

                //****************
                //internal methods
                //****************
                var init = function () {

                    // Load all registered categories
                    categoriesService
                          .getAllCategories()
                          .then(function (categories) {
                              $scope.categories = [].concat(categories);
                              $scope.selected = categories[0];
                          });
                };
                init();
            }
        ]);





})();