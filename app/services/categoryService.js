app.service('categoryService', ['$q', function ($q) {
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
          name: '360\u00B0 Video',
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

//categoryModule.service('categoryService', ['$q', function ($q) {
//    var categoriesArr = [
//      {
//          name: 'Popular on YouTube',
//          avatar: 'svg-1',
//          content: ''
//      },
//      {
//          name: 'Music',
//          avatar: 'svg-1',
//          content: ''
//      },
//      {
//          name: 'Sports',
//          avatar: 'svg-1',
//          content: ''
//      },
//      {
//          name: 'Gaming',
//          avatar: 'svg-1',
//          content: ''
//      },
//      {
//          name: 'News',
//          avatar: 'svg-1',
//          content: ''
//      },
//      {
//          name: 'Live',
//          avatar: 'svg-1',
//          content: ''
//      },
//      {
//          name: '360\u00B0 Video',
//          avatar: 'svg-1',
//          content: ''
//      }
//    ];

//    // Promise-based API
//    return {
//        getAllCategories: function () {
//            // Simulate async nature of real remote calls
//            return $q.when(categoriesArr);
//        }
//    };
//}]);
