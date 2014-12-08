(function() {

  var SearchController = function($scope, $log, searchFactory) {

    // Reminder: Before you finish, pull the repo down from BitBucket in a clean folder and check everything (install scripts, phantomjs) etc., all work out of the box :)
    // And add comments

    $scope.siteURL = 'http://';
    $scope.validURL = false;
    $scope.showSpinner = false;
    $scope.siteResults = [];

    $scope.validateURL = function() {
      if (!$scope.siteURL.match(/^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
        $scope.validURL = false;
        $scope.statusMessage = '';
      }
      else {
        $scope.validURL = true;
        $scope.errorMessage = '';
      }
    }

    $scope.getSiteInfo = function() {

      if ($scope.siteURL && $scope.validURL) {

        $scope.showSpinner = true;
        $scope.statusMessage = 'Give us a second while we give them a ring...';
        var currentURL = $scope.siteURL;

        searchFactory.checkVersion(currentURL, function(error, data) {
          if (!error) {
            $scope.statusMessage = 'That was easy.';
            $scope.siteResults.push({
              url: currentURL,
              version: data.version
            });
          }
          $scope.showSpinner = false;
        });

      }
      else {
        $scope.statusMessage = '';
        $scope.errorMessage = 'Whoops, that looks like an invalid URL.';
      }

    }

    $scope.deleteSite = function(site) {
      $scope.siteResults.splice($scope.siteResults.indexOf(site), 1);
    }

  };

  SearchController.$inject = ['$scope', '$log', 'searchFactory'];
  angular.module('jqueryCheckApp').controller('SearchController', SearchController);

}());
