app.controller('categoryCtrl',
    ['$scope', 'categoryService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
        function ($scope, categoriesService, $mdSidenav, $mdBottomSheet, $log, $q) {

            $scope.selected = null;
            $scope.categories = [];
            $scope.selectCategory = function selectCategory(category) {
                $scope.selected = angular.isNumber(category) ? $scope.categories[category] : category;
            };


            // Load all registered categories
            categoriesService
                  .getAllCategories()
                  .then(function (categories) {
                      console.log(categories);

                      $scope.categories = [].concat(categories);
                      $scope.selected = categories[0];
                  });

            //****************
            //internal methods
            //****************
            var init = function () {

            };
            init();
        }
    ]);

