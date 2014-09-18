// take a comma delimited list, split and trim them
// return as either:
// a) array of objects with a key of withKeyOf
// b) an array of strings (when no withKeyOf is present)

module.exports = function(list, withKeyOf) {
  var items;
  list = list.trim();
  if (list.length == 0) {
    return undefined;
  }
  items = list.split(',').map(function(item){
    return item.trim();
  });

  if (!!withKeyOf) {
    return items.map(function(item){
      var obj = {};
      obj[withKeyOf] = item;
      return obj;
    });
  } else {
    return items;
  }
}
