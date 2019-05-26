var request = require('sync-request');

var getUser = (user) => {
  request('POST', 'http://srv.simplifyml.com/api/app/user/GetSomeTime', {
    json: {"UserSysId":65680,"SubjSysId":13},
  });
};

module.exports.getUser = getUser;
