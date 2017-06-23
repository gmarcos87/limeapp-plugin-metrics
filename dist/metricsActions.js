'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeNode = exports.getMetricsGateway = exports.getMetricsAll = exports.getMetrics = undefined;

var _preactRouterRedux = require('preact-router-redux');

var _metricsConstants = require('./metricsConstants');

var getMetrics = exports.getMetrics = function getMetrics() {
  return function (dispatch) {
    dispatch({
      type: _metricsConstants.LOAD_METRICS
    });
  };
};

var getMetricsAll = exports.getMetricsAll = function getMetricsAll() {
  return function (dispatch) {
    dispatch({
      type: _metricsConstants.LOAD_METRICS_ALL
    });
  };
};

var getMetricsGateway = exports.getMetricsGateway = function getMetricsGateway(hostname) {
  return function (dispatch) {
    dispatch({
      type: _metricsConstants.LOAD_METRICS_GATEWAY,
      payload: { hostname: hostname }
    });
  };
};

var changeNode = exports.changeNode = function changeNode(hostname) {
  return function (dispatch) {
    dispatch((0, _preactRouterRedux.push)('changeNode/' + hostname));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJnZXRNZXRyaWNzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZ2V0TWV0cmljc0FsbCIsImdldE1ldHJpY3NHYXRld2F5IiwiaG9zdG5hbWUiLCJwYXlsb2FkIiwiY2hhbmdlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQU1PLElBQU1BLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFPLFVBQUNDLFFBQUQsRUFBYztBQUM3Q0EsYUFBUztBQUNQQztBQURPLEtBQVQ7QUFHRCxHQUp5QjtBQUFBLENBQW5COztBQU1BLElBQU1DLHdDQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxTQUFPLFVBQUNGLFFBQUQsRUFBYztBQUNoREEsYUFBUztBQUNQQztBQURPLEtBQVQ7QUFHRCxHQUo0QjtBQUFBLENBQXRCOztBQU1BLElBQU1FLGdEQUFvQixTQUFwQkEsaUJBQW9CLENBQUVDLFFBQUY7QUFBQSxTQUFnQixVQUFDSixRQUFELEVBQWM7QUFDN0RBLGFBQVM7QUFDUEMsa0RBRE87QUFFUEksZUFBUyxFQUFDRCxrQkFBRDtBQUZGLEtBQVQ7QUFJRCxHQUxnQztBQUFBLENBQTFCOztBQU9BLElBQU1FLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0YsUUFBRDtBQUFBLFNBQWMsVUFBQ0osUUFBRCxFQUFjO0FBQ3BEQSxhQUFTLDZCQUFLLGdCQUFjSSxRQUFuQixDQUFUO0FBQ0QsR0FGeUI7QUFBQSxDQUFuQiIsImZpbGUiOiJtZXRyaWNzQWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1c2ggfSBmcm9tICdwcmVhY3Qtcm91dGVyLXJlZHV4JztcblxuaW1wb3J0IHtcbiAgTE9BRF9NRVRSSUNTLFxuICBMT0FEX01FVFJJQ1NfQUxMLFxuICBMT0FEX01FVFJJQ1NfR0FURVdBWVxufSBmcm9tICcuL21ldHJpY3NDb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0TWV0cmljcyA9ICggKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPQURfTUVUUklDU1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNZXRyaWNzQWxsID0gKCApID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogTE9BRF9NRVRSSUNTX0FMTFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNZXRyaWNzR2F0ZXdheSA9ICggaG9zdG5hbWUgKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IExPQURfTUVUUklDU19HQVRFV0FZLFxuICAgIHBheWxvYWQ6IHtob3N0bmFtZX1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlTm9kZSA9IChob3N0bmFtZSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHB1c2goJ2NoYW5nZU5vZGUvJytob3N0bmFtZSkpO1xufTsiXX0=