var request    = require('request');
var cheerio    = require('cheerio');

//
// Scraper Service
// -----------------------------------

module.exports = function(url, callback) {

  request(url, function(error, response, html) {

    if (!error) {

      console.log('Response received. Scraper running.');

      var $ = cheerio.load(html);
      var data = {};



      callback(null, data);

    }
    else {
      callback(error);
    }

  });

}
