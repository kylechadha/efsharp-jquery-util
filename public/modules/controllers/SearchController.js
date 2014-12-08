(function() {

  var SearchController = function($scope, $log, searchFactory) {

    // Reminder: Before you finish, pull the repo down from BitBucket in a clean folder and check everything (install scripts, phantomjs) etc., all work out of the box :)
    // And add comments

    $scope.siteURL = 'http://'
    $scope.validURL = false;
    $scope.showSpinner = false;

    $scope.validateURL = function() {
      if (!$scope.siteURL.match(/^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
        $scope.validURL = false;
      }
      else {
        $scope.validURL = true;
        $scope.errorMessage = '';
      }
    }

    $scope.getSiteInfo = function() {

      if ($scope.siteURL && $scope.validURL) {

        $scope.searchResults = '';
        $scope.showSpinner = true;

        searchFactory.checkVersion($scope.siteURL, function(error, data) {
          if (!error) {
            $scope.searchResults = data.version;
          }
          $scope.showSpinner = false;
        });
        
      }
      else {
        $scope.searchResults = '';
        $scope.errorMessage = 'Whoops, that looks like an invalid URL.';
      }

    }

  };

  SearchController.$inject = ['$scope', '$log', 'searchFactory'];
  angular.module('jqueryCheckApp').controller('SearchController', SearchController);

}());
