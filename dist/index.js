'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metricsEpics = require('./metricsEpics');

var _metricsEpics2 = _interopRequireDefault(_metricsEpics);

var _metricsReducer = require('./metricsReducer');

var _metricsSelectors = require('./metricsSelectors');

var selector = _interopRequireWildcard(_metricsSelectors);

var _metricsConstants = require('./metricsConstants');

var constants = _interopRequireWildcard(_metricsConstants);

var _metricsPage = require('./metricsPage');

var _metricsPage2 = _interopRequireDefault(_metricsPage);

var _metricsMenu = require('./metricsMenu');

var _es = require('../i18n/translations/es.json');

var _es2 = _interopRequireDefault(_es);

var _en = require('../i18n/translations/en.json');

var _en2 = _interopRequireDefault(_en);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Metrics',
  page: _metricsPage2.default,
  menu: _metricsMenu.MetricsMenu,
  store: {
    name: 'metrics',
    epics: _metricsEpics2.default,
    reducer: _metricsReducer.reducer,
    selector: selector,
    constants: constants
  },
  translations: Object.assign(_en2.default, _es2.default)
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RvciIsImNvbnN0YW50cyIsIm5hbWUiLCJwYWdlIiwibWVudSIsInN0b3JlIiwiZXBpY3MiLCJyZWR1Y2VyIiwidHJhbnNsYXRpb25zIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztJQUFZQSxROztBQUNaOztJQUFZQyxTOztBQUNaOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkMsUUFBTSxTQURPO0FBRWJDLDZCQUZhO0FBR2JDLGdDQUhhO0FBSWJDLFNBQU87QUFDTEgsVUFBTSxTQUREO0FBRUxJLGlDQUZLO0FBR0xDLG9DQUhLO0FBSUxQLHNCQUpLO0FBS0xDO0FBTEssR0FKTTtBQVdiTyxnQkFBY0MsT0FBT0MsTUFBUDtBQVhELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIGVwaWNzIGZyb20gJy4vbWV0cmljc0VwaWNzJztcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL21ldHJpY3NSZWR1Y2VyJztcbmltcG9ydCAqIGFzIHNlbGVjdG9yIGZyb20gJy4vbWV0cmljc1NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9tZXRyaWNzQ29uc3RhbnRzJztcbmltcG9ydCBNZXRyaWNzIGZyb20gJy4vbWV0cmljc1BhZ2UnO1xuaW1wb3J0IHsgTWV0cmljc01lbnUgfSBmcm9tICcuL21ldHJpY3NNZW51JztcblxuaW1wb3J0IGkxOG5FcyBmcm9tICcuLi9pMThuL3RyYW5zbGF0aW9ucy9lcy5qc29uJztcbmltcG9ydCBpMThuRW4gZnJvbSAnLi4vaTE4bi90cmFuc2xhdGlvbnMvZW4uanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01ldHJpY3MnLFxuICBwYWdlOiBNZXRyaWNzLFxuICBtZW51OiBNZXRyaWNzTWVudSxcbiAgc3RvcmU6IHtcbiAgICBuYW1lOiAnbWV0cmljcycsXG4gICAgZXBpY3MsXG4gICAgcmVkdWNlcixcbiAgICBzZWxlY3RvcixcbiAgICBjb25zdGFudHNcbiAgfSxcbiAgdHJhbnNsYXRpb25zOiBPYmplY3QuYXNzaWduKFxuICAgIGkxOG5FbixcbiAgICBpMThuRXNcbiAgKVxufTsiXX0=