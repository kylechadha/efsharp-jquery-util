var phantomService = require('./services/phantomService')

module.exports = function(app) {

  // Server Routes
  // ----------------------------------------------
  app.get('/siteinfo/:url', function(req, res) {

    var url = req.params.url;

    phantomService(url, function(error, data) {
      if (error) {
        res.send(error);
      }

      res.json(data);
    });

  });
  
  // Front End Routes
  // ----------------------------------------------
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our index.html file
  });

};
