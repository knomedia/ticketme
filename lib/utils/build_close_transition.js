module.exports = function(id) {
  var p = {
    fields: {
      resolution: {name: 'Done'}
    },
    transition: {id: id}
  }
  return p;
}
