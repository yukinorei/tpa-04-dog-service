const parsePathParameters = function(originalPath, pathWithParams) {
  const parametersObj = {};
  const originalPathArray = originalPath.split('/');
  const removeColonString = pathWithParams.split(':').join('');
  const pathWithParamsArray = removeColonString.split('/');
  pathWithParamsArray.forEach((key, index) => {
    if (originalPathArray[index] !== pathWithParamsArray[index]) {
      parametersObj[pathWithParamsArray[index]] = Number(originalPathArray[index]);
    }
  });
  return parametersObj;
};

module.exports = {
  parsePathParameters,
};
