'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../../controllers/public/index');

router.route('/')
  .get(controller.getIndex);

module.exports = router;
