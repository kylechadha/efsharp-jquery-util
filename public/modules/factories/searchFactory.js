(function() {

  var searchFactory = function($http, $log) {

    return {

      checkVersion: function(url, callback) {

        $http.get('/siteinfo/' + encodeURIComponent(url))
          .success(function (data) {
            callback(null, data);
          })
          .error(function (error) {
            callback(error);
          })

      }

    }

  };

  searchFactory.$inject = ['$http', '$log'];
  angular.module('jqueryCheckApp').factory('searchFactory', searchFactory);

})();