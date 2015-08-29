var fs = require('fs');
var path = require('path');

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
      list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr;
      });
  });


};
