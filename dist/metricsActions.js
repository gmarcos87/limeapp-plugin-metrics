'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeNode = exports.getMetrics = undefined;

var _preactRouterRedux = require('preact-router-redux');

var _metricsConstants = require('./metricsConstants');

var getMetrics = exports.getMetrics = function getMetrics() {
  return function (dispatch) {
    dispatch({
      type: _metricsConstants.LOAD_METRICS
    });
  };
};

var changeNode = exports.changeNode = function changeNode(hostname) {
  return function (dispatch) {
    dispatch((0, _preactRouterRedux.push)('changeNode/' + hostname));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRNZXRyaWNzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiY2hhbmdlTm9kZSIsImhvc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBSU8sSUFBTUEsa0NBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQzdDQSxhQUFTO0FBQ1BDO0FBRE8sS0FBVDtBQUdELEdBSnlCO0FBQUEsQ0FBbkI7O0FBTUEsSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxRQUFEO0FBQUEsU0FBYyxVQUFDSCxRQUFELEVBQWM7QUFDcERBLGFBQVMsNkJBQUssZ0JBQWNHLFFBQW5CLENBQVQ7QUFDRCxHQUZ5QjtBQUFBLENBQW5CIiwiZmlsZSI6Im1ldHJpY3NBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVzaCB9IGZyb20gJ3ByZWFjdC1yb3V0ZXItcmVkdXgnO1xuXG5pbXBvcnQge1xuICBMT0FEX01FVFJJQ1Ncbn0gZnJvbSAnLi9tZXRyaWNzQ29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldE1ldHJpY3MgPSAoICkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBMT0FEX01FVFJJQ1NcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlTm9kZSA9IChob3N0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHB1c2goJ2NoYW5nZU5vZGUvJytob3N0bmFtZSkpO1xufTsiXX0=