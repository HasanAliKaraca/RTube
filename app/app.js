var app = angular.module('RTubeApp', []);


app.controller('VideoCtrl', function ($scope, $http, $log, VideoCtrl) {
    $scope.search = function () {
        $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyA9UkstXqg74RPBtw4vcdkbjgPRlG3SRkM',
                type: 'video',
                maxResults: '8',
                part: 'id,snippet',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                q: this.query
            }
        })
        .success( function (data) {
            $log.info(data);
        })
        .error( function () {
            $log.info('Search error');
        });
    }


    var init = function() { 
    }
    init();
});