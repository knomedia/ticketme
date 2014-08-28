module.exports = function(length) {
  var line = '';
  var i = 0;
  while (i<length) {
    line += '-';
    i++;
  }
  return line;
}
