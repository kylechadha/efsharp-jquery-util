var phantom = require('phantom');

//
// Phantom Service
// -----------------------------------

module.exports = function(url, callback) {

  phantom.create('--ssl-protocol=any', function (ph) {
    ph.createPage(function(page) {
      page.open(url, function(status) {

        if (status === "fail") {
          callback('Phantom was unable to reach the URL.');
          return ph.exit();
        }
        else {
          page.evaluate(function() {
            var jQueryVersion = typeof jQuery !== "undefined" ? 'jQuery Version: ' + jQuery.fn.jquery : 'jQuery is not used at this site';

            return {
              version: jQueryVersion
            };
          }, function(data) {
            callback(null, data);
            return ph.exit();
          });
        }
        
      });
    });
  });

}
