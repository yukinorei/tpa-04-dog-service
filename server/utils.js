const parsePathParameters = function(originalPath, pathWithParams) {
  const parametersObj = {};
  const originalPathArray = originalPath.split('/');
  const pathWithParamsArray = pathWithParams.split('/');
  const isParamsValue = () => pathWithParamsArray.startsWith(':');
  for (let i = 1; i < pathWithParamsArray.length; i += 1) {
    if (isParamsValue(pathWithParamsArray[i])) {
      const paramKey = pathWithParamsArray[i].slice(1);
      const paramValue = originalPathArray[i];
      parametersObj[paramKey] = paramValue;
    }
  }
  return parametersObj;
};

module.exports = {
  parsePathParameters,
};
