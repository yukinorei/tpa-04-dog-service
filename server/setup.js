const express = require('express');

const { parsePathParametersMiddleware } = require('./middleware');
const { fetchDogById } = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();

  apiRouter.use('/dog', parsePathParametersMiddleware);
  apiRouter.get('/dog/:id', fetchDogById);

  app.use('/api', apiRouter);
};

module.exports = setup;
