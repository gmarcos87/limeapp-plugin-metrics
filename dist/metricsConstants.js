'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD_GATEWAY = exports.LOAD_GATEWAY = 'metrics/LOAD_GATEWAY';
var LOAD_GATEWAY_SUCCESS = exports.LOAD_GATEWAY_SUCCESS = 'metrics/LOAD_GATEWAY_SUCCESS';
var LOAD_GATEWAY_NOT_FOUND = exports.LOAD_GATEWAY_NOT_FOUND = 'metrics/LOAD_GATEWAY_NOT_FOUND';
var LOAD_GATEWAY_ERROR = exports.LOAD_GATEWAY_ERROR = 'metrics/LOAD_GATEWAY_ERROR';
var LOAD_METRICS = exports.LOAD_METRICS = 'metrics/LOAD_METRICS';
var LOAD_ALL_METRICS = exports.LOAD_ALL_METRICS = 'metrics/LOAD_ALL_METRICS';
var LOAD_METRICS_SUCCESS = exports.LOAD_METRICS_SUCCESS = 'metrics/LOAD_METRICS_SUCCESS';
var LOAD_METRICS_ERROR = exports.LOAD_METRICS_ERROR = 'metrics/LOAD_METRICS_ERROR';
var LOAD_PATH = exports.LOAD_PATH = 'metrics/LOAD_PATH';
var LOAD_PATH_SUCCESS = exports.LOAD_PATH_SUCCESS = 'metrics/LOAD_PATH_SUCCESS';
var LOAD_PATH_ERROR = exports.LOAD_PATH_ERROR = 'metrics/LOAD_PATH_ERROR';
var LOAD_PATH_NOT_FOUND = exports.LOAD_PATH_NOT_FOUND = 'metrics/LOAD_PATH_NOT_FOUND';
var LOAD_METRICS_ALL = exports.LOAD_METRICS_ALL = 'metrics/LOAD_METRICS_ALL';
var LOAD_METRICS_GATEWAY = exports.LOAD_METRICS_GATEWAY = 'metrics/LOAD_METRICS_GATEWAY';
var LOAD_METRICS_GATEWAY_SUCCESS = exports.LOAD_METRICS_GATEWAY_SUCCESS = 'metrics/LOAD_METRICS_GATEWAY_SUCCESS';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzQ29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbIkxPQURfR0FURVdBWSIsIkxPQURfR0FURVdBWV9TVUNDRVNTIiwiTE9BRF9HQVRFV0FZX05PVF9GT1VORCIsIkxPQURfR0FURVdBWV9FUlJPUiIsIkxPQURfTUVUUklDUyIsIkxPQURfQUxMX01FVFJJQ1MiLCJMT0FEX01FVFJJQ1NfU1VDQ0VTUyIsIkxPQURfTUVUUklDU19FUlJPUiIsIkxPQURfUEFUSCIsIkxPQURfUEFUSF9TVUNDRVNTIiwiTE9BRF9QQVRIX0VSUk9SIiwiTE9BRF9QQVRIX05PVF9GT1VORCIsIkxPQURfTUVUUklDU19BTEwiLCJMT0FEX01FVFJJQ1NfR0FURVdBWSIsIkxPQURfTUVUUklDU19HQVRFV0FZX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsc0NBQWUsc0JBQXJCO0FBQ0EsSUFBTUMsc0RBQXVCLDhCQUE3QjtBQUNBLElBQU1DLDBEQUF5QixnQ0FBL0I7QUFDQSxJQUFNQyxrREFBcUIsNEJBQTNCO0FBQ0EsSUFBTUMsc0NBQWUsc0JBQXJCO0FBQ0EsSUFBTUMsOENBQW1CLDBCQUF6QjtBQUNBLElBQU1DLHNEQUF1Qiw4QkFBN0I7QUFDQSxJQUFNQyxrREFBcUIsNEJBQTNCO0FBQ0EsSUFBTUMsZ0NBQVksbUJBQWxCO0FBQ0EsSUFBTUMsZ0RBQW9CLDJCQUExQjtBQUNBLElBQU1DLDRDQUFrQix5QkFBeEI7QUFDQSxJQUFNQyxvREFBc0IsNkJBQTVCO0FBQ0EsSUFBTUMsOENBQW1CLDBCQUF6QjtBQUNBLElBQU1DLHNEQUF1Qiw4QkFBN0I7QUFDQSxJQUFNQyxzRUFBK0Isc0NBQXJDIiwiZmlsZSI6Im1ldHJpY3NDb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9BRF9HQVRFV0FZID0gJ21ldHJpY3MvTE9BRF9HQVRFV0FZJztcbmV4cG9ydCBjb25zdCBMT0FEX0dBVEVXQVlfU1VDQ0VTUyA9ICdtZXRyaWNzL0xPQURfR0FURVdBWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0dBVEVXQVlfTk9UX0ZPVU5EID0gJ21ldHJpY3MvTE9BRF9HQVRFV0FZX05PVF9GT1VORCc7XG5leHBvcnQgY29uc3QgTE9BRF9HQVRFV0FZX0VSUk9SID0gJ21ldHJpY3MvTE9BRF9HQVRFV0FZX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0FEX01FVFJJQ1MgPSAnbWV0cmljcy9MT0FEX01FVFJJQ1MnO1xuZXhwb3J0IGNvbnN0IExPQURfQUxMX01FVFJJQ1MgPSAnbWV0cmljcy9MT0FEX0FMTF9NRVRSSUNTJztcbmV4cG9ydCBjb25zdCBMT0FEX01FVFJJQ1NfU1VDQ0VTUyA9ICdtZXRyaWNzL0xPQURfTUVUUklDU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX01FVFJJQ1NfRVJST1IgPSAnbWV0cmljcy9MT0FEX01FVFJJQ1NfRVJST1InO1xuZXhwb3J0IGNvbnN0IExPQURfUEFUSCA9ICdtZXRyaWNzL0xPQURfUEFUSCc7XG5leHBvcnQgY29uc3QgTE9BRF9QQVRIX1NVQ0NFU1MgPSAnbWV0cmljcy9MT0FEX1BBVEhfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9QQVRIX0VSUk9SID0gJ21ldHJpY3MvTE9BRF9QQVRIX0VSUk9SJztcbmV4cG9ydCBjb25zdCBMT0FEX1BBVEhfTk9UX0ZPVU5EID0gJ21ldHJpY3MvTE9BRF9QQVRIX05PVF9GT1VORCc7XG5leHBvcnQgY29uc3QgTE9BRF9NRVRSSUNTX0FMTCA9ICdtZXRyaWNzL0xPQURfTUVUUklDU19BTEwnO1xuZXhwb3J0IGNvbnN0IExPQURfTUVUUklDU19HQVRFV0FZID0gJ21ldHJpY3MvTE9BRF9NRVRSSUNTX0dBVEVXQVknO1xuZXhwb3J0IGNvbnN0IExPQURfTUVUUklDU19HQVRFV0FZX1NVQ0NFU1MgPSAnbWV0cmljcy9MT0FEX01FVFJJQ1NfR0FURVdBWV9TVUNDRVNTJzsiXX0=