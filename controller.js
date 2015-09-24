'use strict';

var parseDomain = require('parse-domain');

module.exports = function() {
  var meetup = this;

  meetup.url = 'www.google.com';

  meetup.parse = function() {
    meetup.parsed = parseDomain(meetup.url);
  };

  meetup.parse();
};
