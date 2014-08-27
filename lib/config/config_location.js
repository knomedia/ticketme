var path = require('path');

module.exports = function() {
  function getUserHome() {
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
  }
  return path.join(getUserHome(), '.ticketmerc');
}
