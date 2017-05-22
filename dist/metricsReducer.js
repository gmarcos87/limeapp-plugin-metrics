'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _metricsConstants = require('./metricsConstants');

var initialState = {
  metrics: [],
  error: [],
  loading: false,
  status: ''
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload,
      meta = _ref.meta;

  switch (type) {
    case _metricsConstants.LOAD_METRICS:
      return Object.assign({}, initialState, { loading: true, status: 'metrics_status_gateway' });
    case _metricsConstants.LOAD_GATEWAY_SUCCESS:
      return Object.assign({}, state, { gateway: payload.gateway, status: 'metrics_status_path' });
    case _metricsConstants.LOAD_GATEWAY_NOT_FOUND:
      return Object.assign({}, state, { error: state.error.concat(payload.error), status: 'load_last_known_internet_path' });
    case _metricsConstants.LOAD_PATH_SUCCESS:
      var metrics = payload.map(function (x) {
        return { hostname: x, loading: true, error: false };
      });
      return Object.assign({}, state, { metrics: metrics, loading: true, status: 'metrics_status_stations' });
    case _metricsConstants.LOAD_PATH_NOT_FOUND:
      return Object.assign({}, state, { error: state.error.concat(payload.error), loading: false, status: '' });
    case _metricsConstants.LOAD_METRICS_SUCCESS:
      var newMetrics = state.metrics.map(function (x) {
        if (x.hostname !== payload.hostname) {
          return x;
        }
        x.loading = false;
        return Object.assign({}, x, payload);
      });
      var loadingStatus = newMetrics.filter(function (x) {
        return x.loading === true;
      }).length !== 0;
      return Object.assign({}, state, { metrics: newMetrics, loading: loadingStatus });
    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZXRyaWNzIiwiZXJyb3IiLCJsb2FkaW5nIiwic3RhdHVzIiwicmVkdWNlciIsInN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJtZXRhIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2F0ZXdheSIsImNvbmNhdCIsIm1hcCIsImhvc3RuYW1lIiwieCIsIm5ld01ldHJpY3MiLCJsb2FkaW5nU3RhdHVzIiwiZmlsdGVyIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBVUEsSUFBTUEsZUFBZTtBQUNuQkMsV0FBUyxFQURVO0FBRW5CQyxTQUFNLEVBRmE7QUFHbkJDLFdBQVMsS0FIVTtBQUluQkMsVUFBUTtBQUpXLENBQXJCOztBQU9PLElBQU1DLDRCQUFVLFNBQVZBLE9BQVUsR0FBbUQ7QUFBQSxNQUFsREMsS0FBa0QsdUVBQTFDTixZQUEwQztBQUFBO0FBQUEsTUFBMUJPLElBQTBCLFFBQTFCQSxJQUEwQjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3hFLFVBQVFGLElBQVI7QUFDRTtBQUNFLGFBQU9HLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCWCxZQUFsQixFQUFnQyxFQUFDRyxTQUFRLElBQVQsRUFBZUMsUUFBTyx3QkFBdEIsRUFBaEMsQ0FBUDtBQUNGO0FBQ0UsYUFBT00sT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLEtBQWxCLEVBQXlCLEVBQUNNLFNBQVFKLFFBQVFJLE9BQWpCLEVBQTBCUixRQUFPLHFCQUFqQyxFQUF6QixDQUFQO0FBQ0Y7QUFDRSxhQUFPTSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsS0FBbEIsRUFBeUIsRUFBQ0osT0FBT0ksTUFBTUosS0FBTixDQUFZVyxNQUFaLENBQW1CTCxRQUFRTixLQUEzQixDQUFSLEVBQTJDRSxRQUFPLCtCQUFsRCxFQUF6QixDQUFQO0FBQ0Y7QUFDRSxVQUFJSCxVQUFVTyxRQUFRTSxHQUFSLENBQVk7QUFBQSxlQUFNLEVBQUNDLFVBQVNDLENBQVYsRUFBYWIsU0FBUSxJQUFyQixFQUEyQkQsT0FBTSxLQUFqQyxFQUFOO0FBQUEsT0FBWixDQUFkO0FBQ0EsYUFBT1EsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLEtBQWxCLEVBQXlCLEVBQUNMLGdCQUFELEVBQVNFLFNBQVEsSUFBakIsRUFBdUJDLFFBQU8seUJBQTlCLEVBQXpCLENBQVA7QUFDRjtBQUNFLGFBQU9NLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxLQUFsQixFQUF5QixFQUFDSixPQUFPSSxNQUFNSixLQUFOLENBQVlXLE1BQVosQ0FBbUJMLFFBQVFOLEtBQTNCLENBQVIsRUFBMkNDLFNBQVMsS0FBcEQsRUFBMkRDLFFBQU8sRUFBbEUsRUFBekIsQ0FBUDtBQUNGO0FBQ0UsVUFBSWEsYUFBYVgsTUFBTUwsT0FBTixDQUFjYSxHQUFkLENBQWtCLGFBQUs7QUFDdEMsWUFBSUUsRUFBRUQsUUFBRixLQUFlUCxRQUFRTyxRQUEzQixFQUFxQztBQUFFLGlCQUFPQyxDQUFQO0FBQVc7QUFDbERBLFVBQUViLE9BQUYsR0FBWSxLQUFaO0FBQ0EsZUFBT08sT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JLLENBQWxCLEVBQXFCUixPQUFyQixDQUFQO0FBQ0QsT0FKZ0IsQ0FBakI7QUFLQSxVQUFJVSxnQkFBZ0JELFdBQVdFLE1BQVgsQ0FBa0I7QUFBQSxlQUFLSCxFQUFFYixPQUFGLEtBQWMsSUFBbkI7QUFBQSxPQUFsQixFQUEyQ2lCLE1BQTNDLEtBQXNELENBQTFFO0FBQ0EsYUFBT1YsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLEtBQWxCLEVBQXlCLEVBQUVMLFNBQVNnQixVQUFYLEVBQXVCZCxTQUFTZSxhQUFoQyxFQUF6QixDQUFQO0FBQ0Y7QUFDRSxhQUFPWixLQUFQO0FBckJKO0FBdUJELENBeEJNIiwiZmlsZSI6Im1ldHJpY3NSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTE9BRF9NRVRSSUNTLFxuICBMT0FEX01FVFJJQ1NfU1VDQ0VTUyxcbiAgTE9BRF9QQVRIX1NVQ0NFU1MsXG4gIExPQURfUEFUSF9OT1RfRk9VTkQsXG4gIExPQURfR0FURVdBWV9TVUNDRVNTLFxuICBMT0FEX0dBVEVXQVlfTk9UX0ZPVU5EXG59IGZyb20gJy4vbWV0cmljc0NvbnN0YW50cyc7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtZXRyaWNzOiBbXSxcbiAgZXJyb3I6W10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzdGF0dXM6ICcnXG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkLCBtZXRhIH0pID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBMT0FEX01FVFJJQ1M6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLCB7bG9hZGluZzp0cnVlLCBzdGF0dXM6J21ldHJpY3Nfc3RhdHVzX2dhdGV3YXknfSk7XG4gICAgY2FzZSBMT0FEX0dBVEVXQVlfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2dhdGV3YXk6cGF5bG9hZC5nYXRld2F5LCBzdGF0dXM6J21ldHJpY3Nfc3RhdHVzX3BhdGgnfSk7XG4gICAgY2FzZSBMT0FEX0dBVEVXQVlfTk9UX0ZPVU5EOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7ZXJyb3I6IHN0YXRlLmVycm9yLmNvbmNhdChwYXlsb2FkLmVycm9yKSwgc3RhdHVzOidsb2FkX2xhc3Rfa25vd25faW50ZXJuZXRfcGF0aCd9KTtcbiAgICBjYXNlIExPQURfUEFUSF9TVUNDRVNTOlxuICAgICAgbGV0IG1ldHJpY3MgPSBwYXlsb2FkLm1hcCh4ID0+ICh7aG9zdG5hbWU6eCwgbG9hZGluZzp0cnVlLCBlcnJvcjpmYWxzZX0pKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge21ldHJpY3MsbG9hZGluZzp0cnVlLCBzdGF0dXM6J21ldHJpY3Nfc3RhdHVzX3N0YXRpb25zJ30pO1xuICAgIGNhc2UgTE9BRF9QQVRIX05PVF9GT1VORDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2Vycm9yOiBzdGF0ZS5lcnJvci5jb25jYXQocGF5bG9hZC5lcnJvciksIGxvYWRpbmc6IGZhbHNlLCBzdGF0dXM6Jyd9KTtcbiAgICBjYXNlIExPQURfTUVUUklDU19TVUNDRVNTOlxuICAgICAgbGV0IG5ld01ldHJpY3MgPSBzdGF0ZS5tZXRyaWNzLm1hcCh4ID0+IHtcbiAgICAgICAgaWYgKHguaG9zdG5hbWUgIT09IHBheWxvYWQuaG9zdG5hbWUpIHsgcmV0dXJuIHg7IH1cbiAgICAgICAgeC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB4LCBwYXlsb2FkKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGxvYWRpbmdTdGF0dXMgPSBuZXdNZXRyaWNzLmZpbHRlcih4ID0+IHgubG9hZGluZyA9PT0gdHJ1ZSkubGVuZ3RoICE9PSAwO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1ldHJpY3M6IG5ld01ldHJpY3MsIGxvYWRpbmc6IGxvYWRpbmdTdGF0dXMgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTsiXX0=