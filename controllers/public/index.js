'use strict';

const Promise = require('bluebird');
const TaskCollection = require('../../collections/taskCollection');

const getIndex = function(req, res) {
  TaskCollection.getList()
    .then(function (tasks) {
      res.json(tasks);
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
};

module.exports = {
  getIndex: getIndex
};
