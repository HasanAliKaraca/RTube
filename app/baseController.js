(function () {

    var baseModule = angular.module('base', ['ngMaterial']);

    baseModule.controller('baseController', ['$scope', '$mdSidenav', '$log', function ($scope, $mdSidenav, $log) {

        //$scope.toggleCategoriesList;

        //var sideNavCategoryListId = 'sideNavCategoryList';
        //$mdSidenav(sideNavCategoryListId).then(function (instance) {
        //    $log.debug(sideNavCategoryListId + "is now ready");
            
        //    $scope.toggleCategoriesList = function () {
        //        $mdSidenav(sideNavCategoryListId).toggle();
        //    }();
        //});

        var init = function () {
        }
        init();
    }]);

})();