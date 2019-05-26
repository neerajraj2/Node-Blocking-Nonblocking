var request = require('request');

var getUser = (user) => {
    request({
      url: 'http://srv.simplifyml.com/api/app/user/GetSomeTime',
      json: {"UserSysId":65680,"SubjSysId":13},
      method:'POST'
    }, (error, response, body) => {
        console.log(`${user} info retrieved successfully.`);
    });
  };

  module.exports.getUser = getUser;