'use strict';

var weather = require('weather-js');

module.exports.getWeather = function getWeather (req, res, next) {
  // Code necessary to consume the Weather API and respond
  console.log("xdtest..." + req.swagger.params.location.value + ":" + req.swagger.params.unit.value);
  weather.find({
    search: req.swagger.params.location.value,
    degreeType: req.swagger.params.unit.value
  }, function(err, result) {
    if (err) {
      console.log(err.stack);
      return next(err.message);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result[0] || {}, null, 2));
  });
};
