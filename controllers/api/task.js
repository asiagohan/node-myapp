'use strict';

const Promise        = require('bluebird');
const Task           = require('../../models/task');
const TaskCollection = require('../../collections/taskCollection');

const getTask = function(req, res){
  const id = req.params.id;
  Task.forge({id: id})
    .fetch({columns: ['title', 'description', 'created_at', 'updated_at']})
    .then(function (task){
      res.json(task.toJSON());
    })
    .catch(function (error) {
       res.status(500).json({msg: error.message});
    });
};

const getTasks = function(req, res) {
  TaskCollection.getList()
    .then(function (tasks){
      res.json(tasks);
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
};

const postCreate = function(req, res) {
  new Task({
    title      : req.body.title,
    description: req.body.description,
    created_at : new Date().toISOString(),
    updated_at : new Date().toISOString()
  })
  .save()
  .then(function (task){
    res.json(task.id);
  })
  .catch (function(error){
    res.status(500).json({msg: error.message});
  });
};

const deleteDestroy = function(req, res) {
  new Task()
    .where('id', req.params.id)
    .destroy()
    .then(function (task){
      res.json({message: 'success'});
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
}

module.exports = {
  getTask      : getTask,
  getTasks     : getTasks,
  postCreate   : postCreate,
  deleteDestroy: deleteDestroy
};
