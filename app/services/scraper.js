var phantom = require('phantom');

//
// Scraper Service
// -----------------------------------

module.exports = function(url, callback) {

  request(url, function(error, response, html) {

    if (!error) {

      console.log('Response received. Scraper running.');

      var data = {};



      callback(null, data);

    }
    else {
      callback(error);
    }

  });

}
