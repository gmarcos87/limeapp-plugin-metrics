'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metricsApi = require('./metricsApi');

var _metricsConstants = require('./metricsConstants');

require('rxjs/add/operator/map');

require('rxjs/add/operator/catch');

require('rxjs/add/operator/concatMap');

require('rxjs/add/operator/concatAll');

require('rxjs/add/operator/mergeMap');

require('rxjs/add/operator/mergeAll');

var loadGateway = function loadGateway(action$, store, _ref) {
  var wsAPI = _ref.wsAPI;
  return action$.ofType(_metricsConstants.LOAD_METRICS).mergeMap(function () {
    return (0, _metricsApi.getGateway)(wsAPI, store.getState().meta.sid);
  }).map(function (payload) {
    if (!payload.error) {
      return { type: _metricsConstants.LOAD_GATEWAY_SUCCESS, payload: payload };
    }
    return { type: _metricsConstants.LOAD_GATEWAY_NOT_FOUND, payload: payload };
  }).catch([{ type: _metricsConstants.LOAD_GATEWAY_ERROR }]);
};

var loadPath = function loadPath(action$, store, _ref2) {
  var wsAPI = _ref2.wsAPI;
  return action$.ofType(_metricsConstants.LOAD_GATEWAY_SUCCESS).mergeMap(function (action) {
    return (0, _metricsApi.getPath)(wsAPI, store.getState().meta.sid, { target: store.getState().metrics.gateway });
  }).map(function (payload) {
    if (!payload.error) {
      return { type: _metricsConstants.LOAD_PATH_SUCCESS, payload: payload };
    }
    return { type: _metricsConstants.LOAD_PATH_NOT_FOUND, payload: payload };
  }).catch([{ type: _metricsConstants.LOAD_PATH_ERROR }]);
};

var loadLastPath = function loadLastPath(action$, store, _ref3) {
  var wsAPI = _ref3.wsAPI;
  return action$.ofType(_metricsConstants.LOAD_GATEWAY_NOT_FOUND).mergeMap(function (action) {
    return (0, _metricsApi.getLastKnownPath)(wsAPI, store.getState().meta.sid, {});
  }).map(function (payload) {
    if (!payload.error) {
      return { type: _metricsConstants.LOAD_PATH_SUCCESS, payload: payload };
    }
    return { type: _metricsConstants.LOAD_PATH_NOT_FOUND, payload: payload };
  }).catch([{ type: _metricsConstants.LOAD_PATH_ERROR }]);
};

var loadMetrics = function loadMetrics(action$, store, _ref4) {
  var wsAPI = _ref4.wsAPI;
  return action$.ofType(_metricsConstants.LOAD_METRICS_ALL).map(function (action) {
    return store.getState().metrics.metrics;
  }).concatMap(function (paths) {
    return paths.map(function (path) {
      return (0, _metricsApi.getMetrics)(wsAPI, store.getState().meta.sid, { target: path.hostname });
    });
  }).concatAll().map(function (payload) {
    return { type: _metricsConstants.LOAD_METRICS_SUCCESS, payload: payload };
  });
};

/*const loadGatewayPath = ( action$ ) =>
    action$.ofType(LOAD_GATEWAY_SUCCESS)
      .map(action => action.payload)
      .map(payload => ({type:LOAD_PATH_SUCCESS, payload:[payload.gateway]}));
*/
var loadGatewayMetrics = function loadGatewayMetrics(action$, store, _ref5) {
  var wsAPI = _ref5.wsAPI;
  return action$.ofType.apply(action$, [_metricsConstants.LOAD_PATH_SUCCESS, _metricsConstants.LOAD_METRICS_GATEWAY]).map(function (action) {
    return action.payload;
  }).mergeMap(function (payload) {
    return (0, _metricsApi.getMetrics)(wsAPI, store.getState().meta.sid, { target: store.getState().metrics.gateway }).map(function (payload) {
      return { type: _metricsConstants.LOAD_METRICS_GATEWAY_SUCCESS, payload: payload };
    });
  });
};

exports.default = { loadGateway: loadGateway, loadPath: loadPath, loadMetrics: loadMetrics, loadLastPath: loadLastPath, loadGatewayMetrics: loadGatewayMetrics };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzRXBpY3MuanMiXSwibmFtZXMiOlsibG9hZEdhdGV3YXkiLCJhY3Rpb24kIiwic3RvcmUiLCJ3c0FQSSIsIm9mVHlwZSIsIm1lcmdlTWFwIiwiZ2V0U3RhdGUiLCJtZXRhIiwic2lkIiwibWFwIiwicGF5bG9hZCIsImVycm9yIiwidHlwZSIsImNhdGNoIiwibG9hZFBhdGgiLCJhY3Rpb24iLCJ0YXJnZXQiLCJtZXRyaWNzIiwiZ2F0ZXdheSIsImxvYWRMYXN0UGF0aCIsImxvYWRNZXRyaWNzIiwiY29uY2F0TWFwIiwicGF0aHMiLCJwYXRoIiwiaG9zdG5hbWUiLCJjb25jYXRBbGwiLCJsb2FkR2F0ZXdheU1ldHJpY3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQWVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFFQyxPQUFGLEVBQVdDLEtBQVg7QUFBQSxNQUFvQkMsS0FBcEIsUUFBb0JBLEtBQXBCO0FBQUEsU0FDbEJGLFFBQVFHLE1BQVIsaUNBQ0dDLFFBREgsQ0FDWTtBQUFBLFdBQUssNEJBQVdGLEtBQVgsRUFBaUJELE1BQU1JLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCQyxHQUF2QyxDQUFMO0FBQUEsR0FEWixFQUVHQyxHQUZILENBRU8sbUJBQVc7QUFDZCxRQUFJLENBQUNDLFFBQVFDLEtBQWIsRUFBb0I7QUFDbEIsYUFBTyxFQUFDQyw0Q0FBRCxFQUE0QkYsZ0JBQTVCLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBQ0UsOENBQUQsRUFBOEJGLGdCQUE5QixFQUFQO0FBQ0QsR0FQSCxFQVFHRyxLQVJILENBUVMsQ0FBRSxFQUFDRCwwQ0FBRCxFQUFGLENBUlQsQ0FEa0I7QUFBQSxDQUFwQjs7QUFXQSxJQUFNRSxXQUFXLFNBQVhBLFFBQVcsQ0FBRWIsT0FBRixFQUFXQyxLQUFYO0FBQUEsTUFBb0JDLEtBQXBCLFNBQW9CQSxLQUFwQjtBQUFBLFNB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IiwiZmlsZSI6Im1ldHJpY3NFcGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBhdGgsIGdldEdhdGV3YXksIGdldE1ldHJpY3MsIGdldExhc3RLbm93blBhdGggfSBmcm9tICcuL21ldHJpY3NBcGknO1xuaW1wb3J0IHtcbiAgTE9BRF9HQVRFV0FZX1NVQ0NFU1MsXG4gIExPQURfR0FURVdBWV9FUlJPUixcbiAgTE9BRF9HQVRFV0FZX05PVF9GT1VORCxcbiAgTE9BRF9QQVRILFxuICBMT0FEX1BBVEhfU1VDQ0VTUyxcbiAgTE9BRF9QQVRIX0VSUk9SLFxuICBMT0FEX1BBVEhfTk9UX0ZPVU5ELFxuICBMT0FEX01FVFJJQ1MsXG4gIExPQURfTUVUUklDU19TVUNDRVNTLFxuICBMT0FEX01FVFJJQ1NfR0FURVdBWV9TVUNDRVNTLFxuICBMT0FEX01FVFJJQ1NfQUxMLFxuICBMT0FEX01FVFJJQ1NfR0FURVdBWVxufSBmcm9tICcuL21ldHJpY3NDb25zdGFudHMnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0TWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0QWxsJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZUFsbCc7XG5cbmNvbnN0IGxvYWRHYXRld2F5ID0gKCBhY3Rpb24kLCBzdG9yZSwgeyB3c0FQSSB9KSA9PlxuICBhY3Rpb24kLm9mVHlwZShMT0FEX01FVFJJQ1MpXG4gICAgLm1lcmdlTWFwKCgpPT4gZ2V0R2F0ZXdheSh3c0FQSSxzdG9yZS5nZXRTdGF0ZSgpLm1ldGEuc2lkLCkpXG4gICAgLm1hcChwYXlsb2FkID0+IHtcbiAgICAgIGlmICghcGF5bG9hZC5lcnJvcikge1xuICAgICAgICByZXR1cm4ge3R5cGU6TE9BRF9HQVRFV0FZX1NVQ0NFU1MsIHBheWxvYWR9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt0eXBlOkxPQURfR0FURVdBWV9OT1RfRk9VTkQsIHBheWxvYWR9O1xuICAgIH0pXG4gICAgLmNhdGNoKFsoe3R5cGU6TE9BRF9HQVRFV0FZX0VSUk9SfSldKTtcblxuY29uc3QgbG9hZFBhdGggPSAoIGFjdGlvbiQsIHN0b3JlLCB7IHdzQVBJIH0pID0+XG4gIGFjdGlvbiQub2ZUeXBlKExPQURfR0FURVdBWV9TVUNDRVNTKVxuICAgICAgLm1lcmdlTWFwKChhY3Rpb24pPT4gZ2V0UGF0aCh3c0FQSSxzdG9yZS5nZXRTdGF0ZSgpLm1ldGEuc2lkLHt0YXJnZXQ6c3RvcmUuZ2V0U3RhdGUoKS5tZXRyaWNzLmdhdGV3YXl9KSlcbiAgICAgIC5tYXAocGF5bG9hZCA9PiB7XG4gICAgICAgIGlmICghcGF5bG9hZC5lcnJvcikge1xuICAgICAgICAgIHJldHVybiB7dHlwZTpMT0FEX1BBVEhfU1VDQ0VTUywgcGF5bG9hZH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt0eXBlOkxPQURfUEFUSF9OT1RfRk9VTkQsIHBheWxvYWR9O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChbKHt0eXBlOkxPQURfUEFUSF9FUlJPUn0pXSk7XG5cbmNvbnN0IGxvYWRMYXN0UGF0aCA9ICggYWN0aW9uJCwgc3RvcmUsIHsgd3NBUEkgfSkgPT5cbiAgYWN0aW9uJC5vZlR5cGUoTE9BRF9HQVRFV0FZX05PVF9GT1VORClcbiAgICAgIC5tZXJnZU1hcCgoYWN0aW9uKT0+IGdldExhc3RLbm93blBhdGgod3NBUEksc3RvcmUuZ2V0U3RhdGUoKS5tZXRhLnNpZCx7fSkpXG4gICAgICAubWFwKHBheWxvYWQgPT4ge1xuICAgICAgICBpZiAoIXBheWxvYWQuZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4ge3R5cGU6TE9BRF9QQVRIX1NVQ0NFU1MsIHBheWxvYWR9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dHlwZTpMT0FEX1BBVEhfTk9UX0ZPVU5ELCBwYXlsb2FkfTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goWyh7dHlwZTpMT0FEX1BBVEhfRVJST1J9KV0pO1xuXG5jb25zdCBsb2FkTWV0cmljcyA9ICggYWN0aW9uJCwgc3RvcmUsIHsgd3NBUEkgfSkgPT5cbiAgICBhY3Rpb24kLm9mVHlwZShMT0FEX01FVFJJQ1NfQUxMKVxuICAgICAgLm1hcChhY3Rpb24gPT4gc3RvcmUuZ2V0U3RhdGUoKS5tZXRyaWNzLm1ldHJpY3MpXG4gICAgICAuY29uY2F0TWFwKHBhdGhzID0+IHBhdGhzLm1hcCgocGF0aCk9PmdldE1ldHJpY3Mod3NBUEksc3RvcmUuZ2V0U3RhdGUoKS5tZXRhLnNpZCx7dGFyZ2V0OnBhdGguaG9zdG5hbWV9KSkpXG4gICAgICAuY29uY2F0QWxsKClcbiAgICAgIC5tYXAocGF5bG9hZCA9PiAoe3R5cGU6TE9BRF9NRVRSSUNTX1NVQ0NFU1MsIHBheWxvYWQgfSkpO1xuXG4vKmNvbnN0IGxvYWRHYXRld2F5UGF0aCA9ICggYWN0aW9uJCApID0+XG4gICAgYWN0aW9uJC5vZlR5cGUoTE9BRF9HQVRFV0FZX1NVQ0NFU1MpXG4gICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgIC5tYXAocGF5bG9hZCA9PiAoe3R5cGU6TE9BRF9QQVRIX1NVQ0NFU1MsIHBheWxvYWQ6W3BheWxvYWQuZ2F0ZXdheV19KSk7XG4qL1xuY29uc3QgbG9hZEdhdGV3YXlNZXRyaWNzID0gKCBhY3Rpb24kLCBzdG9yZSwgeyB3c0FQSSB9KSA9PlxuICAgIGFjdGlvbiQub2ZUeXBlKC4uLltMT0FEX1BBVEhfU1VDQ0VTUyxMT0FEX01FVFJJQ1NfR0FURVdBWV0pXG4gICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgIC5tZXJnZU1hcChwYXlsb2FkID0+IGdldE1ldHJpY3Mod3NBUEksc3RvcmUuZ2V0U3RhdGUoKS5tZXRhLnNpZCx7dGFyZ2V0OnN0b3JlLmdldFN0YXRlKCkubWV0cmljcy5nYXRld2F5fSlcbiAgICAgICAgLm1hcChwYXlsb2FkID0+ICh7dHlwZTpMT0FEX01FVFJJQ1NfR0FURVdBWV9TVUNDRVNTLCBwYXlsb2FkIH0pKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkR2F0ZXdheSwgbG9hZFBhdGgsIGxvYWRNZXRyaWNzLCBsb2FkTGFzdFBhdGgsIGxvYWRHYXRld2F5TWV0cmljcyB9OyJdfQ==