const utils = require('./utils');

const parsePathParametersMiddleware = (req, res, next) => {
  // このコンソールログで /api/dog/{number} ってターミナルに出てきます
  console.log(req.originalUrl);

  // req.originalUrl から id を見つけて req に { id: X } 型のオブジェクトを追加するため
  // utils.parsePathParameters を実装してください。
  const params = utils.parsePathParameters(req.originalUrl, '/api/dog/:id');
  req.myParams = params;

  // nextは何か？
  // express middleware も理解しとこう：
  // https://expressjs.com/ja/guide/using-middleware.html
  next();
};

module.exports = {
  parsePathParametersMiddleware,
};
