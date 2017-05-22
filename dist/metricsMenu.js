'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricsMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetricsMenu = exports.MetricsMenu = function (_Component) {
  _inherits(MetricsMenu, _Component);

  function MetricsMenu() {
    _classCallCheck(this, MetricsMenu);

    return _possibleConstructorReturn(this, (MetricsMenu.__proto__ || Object.getPrototypeOf(MetricsMenu)).apply(this, arguments));
  }

  _createClass(MetricsMenu, [{
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'a',
        { href: '#/metrics' },
        I18n.t('Metrics')
      );
    }
  }]);

  return MetricsMenu;
}(_preact.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzTWVudS5qcyJdLCJuYW1lcyI6WyJNZXRyaWNzTWVudSIsIkkxOG4iLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsVyxXQUFBQSxXOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLGFBQVE7QUFBQTtBQUFBLFVBQUcsTUFBTSxXQUFUO0FBQXVCQyxhQUFLQyxDQUFMLENBQU8sU0FBUDtBQUF2QixPQUFSO0FBQ0QiLCJmaWxlIjoibWV0cmljc01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTWV0cmljc01lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8YSBocmVmPXsnIy9tZXRyaWNzJ30+e0kxOG4udCgnTWV0cmljcycpfTwvYT4pO1xuICB9XG59Il19