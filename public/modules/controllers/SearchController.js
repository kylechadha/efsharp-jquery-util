(function() {

  var SearchController = function($scope, $log, searchFactory) {

    // Reminder: Before you finish, pull the repo down from BitBucket in a clean folder and check everything (install scripts, phantomjs) etc., all work out of the box :)

    $scope.siteURL = 'http://'
    $scope.validURL = false;
    $scope.errorMessage = '';

    $scope.validateURL = function() {
      if (!$scope.siteURL.match(/^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
        $scope.validURL = false;
        // $scope.errorMessage = 'Checking URL...';
      }
      else {
        $scope.validURL = true;
        $scope.errorMessage = '';
      }
    }

    $scope.getSiteInfo = function() {

      // $scope.validateURL();

      if ($scope.siteURL && $scope.validURL) {
        $log.log('Sending URL to factory.')
        searchFactory.checkVersion($scope.siteURL, function(error, data) {
          if (!error) {
            $scope.errorMessage = data.version;
          }
        });
      }
      else {
        $scope.errorMessage = 'Whoops, that looks like an invalid URL.';
      }

    }

  };

  SearchController.$inject = ['$scope', '$log', 'searchFactory'];
  angular.module('jqueryCheckApp').controller('SearchController', SearchController);

}());
