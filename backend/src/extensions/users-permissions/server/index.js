'use strict';

const bootstrap = require('./bootstrap');
const controllers = require('./controllers');


module.exports = () => ({
  bootstrap,
  controllers,
});
