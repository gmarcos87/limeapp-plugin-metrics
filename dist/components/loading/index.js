'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'div',
        { 'class': 'spinner' },
        (0, _preact.h)('div', { 'class': 'bounce1' }),
        (0, _preact.h)('div', { 'class': 'bounce2' }),
        (0, _preact.h)('div', { 'class': 'bounce3' })
      );
    }
  }]);

  return Loading;
}(_preact.Component);

exports.default = Loading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2xvYWRpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7OzZCQUVLO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFNLFNBQVg7QUFDRSxnQ0FBSyxTQUFNLFNBQVgsR0FERjtBQUVFLGdDQUFLLFNBQU0sU0FBWCxHQUZGO0FBR0UsZ0NBQUssU0FBTSxTQUFYO0FBSEYsT0FERjtBQU9EOzs7Ozs7a0JBR1lBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5cbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTFcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiJdfQ==