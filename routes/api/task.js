'use strict';

const express    = require('express');
const router     = express.Router();
const controller = require('../../controllers/api/task');

router.route('/')
  .get(controller.getTasks);

router.route('/:id')
  .get(controller.getTask);

router.route('/')
  .post(controller.postCreate);

router.route('/:id')
  .delete(controller.deleteDestroy);

module.exports = router;
