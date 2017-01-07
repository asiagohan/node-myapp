'use strict';

const getIndex = function(req, res) {
  res.send('Hello World!');
};

module.exports = {
  getIndex: getIndex
};
