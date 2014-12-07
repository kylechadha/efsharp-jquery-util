(function() {

  var SearchController = function($scope, $log, searchFactory) {

    // Reminder: Before you finish, pull the repo down from BitBucket in a clean folder and check everything (install scripts, phantomjs) etc., all work out of the box :)

    $scope.siteURL = 'http://xkcd.com'

    $scope.getSiteInfo = function() {

      $scope.errorMessage = '';

      if ($scope.siteURL) {

        if (!$scope.siteURL.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
          $scope.errorMessage = 'Invalid URL!';
        }
        else {

          searchFactory.checkVersion($scope.siteURL, function(error, data) {
            if (!error) {
              $scope.errorMessage = data.version;

            }
          });

          $scope.siteURL = '';

        }

      }


    }


  };

  SearchController.$inject = ['$scope', '$log', 'searchFactory'];
  angular.module('jqueryCheckApp').controller('SearchController', SearchController);

}());
