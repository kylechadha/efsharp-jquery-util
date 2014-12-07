(function() {

  var SearchController = function($scope, $log, searchFactory) {

    // Reminder: Before you finish, pull the repo down from BitBucket in a clean folder and check everything (install scripts, phantomjs) etc., all work out of the box :)

    $scope.getSiteInfo = function() {

      if ($scope.siteURL) {

        searchFactory.checkVersion($scope.siteURL, function(error, data) {
          if (!error) {

          }
        });

        $scope.siteURL = '';

      }

    }


  };

  SearchController.$inject = ['$scope', '$log', 'searchFactory'];
  angular.module('jqueryCheckApp').controller('SearchController', SearchController);

}());
