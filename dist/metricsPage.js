'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _redux = require('redux');

var _preactRedux = require('preact-redux');

var _metricsActions = require('./metricsActions');

var _loading = require('./components/loading');

var _loading2 = _interopRequireDefault(_loading);

var _box = require('./components/box');

var _box2 = _interopRequireDefault(_box);

var _simpleColorScale = require('simple-color-scale');

var _simpleColorScale2 = _interopRequireDefault(_simpleColorScale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_simpleColorScale2.default.setConfig({
  outputStart: 1,
  outputEnd: 100,
  inputStart: 0,
  inputEnd: 30
});

var style = {
  textLoading: {
    textAlign: 'center',
    display: 'block'
  },
  textError: {
    textAlign: 'center',
    display: 'block',
    background: '#d55206',
    color: '#fff',
    padding: '5px',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

var Metrics = function (_Component) {
  _inherits(Metrics, _Component);

  function Metrics() {
    _classCallCheck(this, Metrics);

    return _possibleConstructorReturn(this, (Metrics.__proto__ || Object.getPrototypeOf(Metrics)).apply(this, arguments));
  }

  _createClass(Metrics, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getMetrics();
    }
  }, {
    key: 'showButton',
    value: function showButton(loading) {
      if (!loading) {
        return (0, _preact.h)(
          'button',
          { 'class': 'button green block', type: 'submit', onClick: this.props.getMetrics },
          I18n.t('Get metrics')
        );
      }
      return (0, _preact.h)('div', null);
    }
  }, {
    key: 'showLoading',
    value: function showLoading(loading) {
      if (!loading) {
        return;
      }
      return (0, _preact.h)(
        'div',
        { style: { paddingTop: '50px' } },
        (0, _preact.h)(_loading2.default, null),
        (0, _preact.h)(
          'span',
          { style: style.textLoading },
          I18n.translateWithoutI18nline(this.props.metrics.status)
        )
      );
    }
  }, {
    key: 'showError',
    value: function showError(error) {
      if (error !== null) {
        return (0, _preact.h)(
          'p',
          { style: style.textError },
          'Error: ',
          error.msg
        );
      }
      return;
    }
  }, {
    key: 'isGateway',
    value: function isGateway(hostname, gateway) {
      return hostname === gateway ? (0, _preact.h)(
        'span',
        null,
        (0, _preact.h)('img', { src: '' })
      ) : false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _preact.h)(
        'div',
        { 'class': 'container', style: { paddingTop: '50px', textAlign: 'center' } },
        this.showLoading(this.props.metrics.loading),
        (0, _preact.h)('br', null),
        this.props.metrics.error.map(function (x) {
          return _this2.showError(x);
        }),
        this.props.metrics.metrics.map(function (station) {
          return (0, _preact.h)(_box2.default, { station: station });
        }),
        this.showButton(this.props.metrics.loading),
        (0, _preact.h)('br', null)
      );
    }
  }]);

  return Metrics;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    metrics: state.metrics
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMetrics: (0, _redux.bindActionCreators)(_metricsActions.getMetrics, dispatch)
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps, mapDispatchToProps)(Metrics);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwidGV4dExvYWRpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwidGV4dEVycm9yIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJNZXRyaWNzIiwicHJvcHMiLCJnZXRNZXRyaWNzIiwibG9hZGluZyIsIkkxOG4iLCJ0IiwicGFkZGluZ1RvcCIsInRyYW5zbGF0ZVdpdGhvdXRJMThubGluZSIsIm1ldHJpY3MiLCJzdGF0dXMiLCJlcnJvciIsIm1zZyIsImhvc3RuYW1lIiwiZ2F0ZXdheSIsInNob3dMb2FkaW5nIiwibWFwIiwic2hvd0Vycm9yIiwieCIsInN0YXRpb24iLCJzaG93QnV0dG9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLDJCQUFXQSxTQUFYLENBQXFCO0FBQ25CQyxlQUFZLENBRE87QUFFbkJDLGFBQVUsR0FGUztBQUduQkMsY0FBVyxDQUhRO0FBSW5CQyxZQUFTO0FBSlUsQ0FBckI7O0FBT0EsSUFBTUMsUUFBUTtBQUNaQyxlQUFhO0FBQ1hDLGVBQVcsUUFEQTtBQUVYQyxhQUFTO0FBRkUsR0FERDtBQUtaQyxhQUFXO0FBQ1RGLGVBQVcsUUFERjtBQUVUQyxhQUFTLE9BRkE7QUFHVEUsZ0JBQVksU0FISDtBQUlUQyxXQUFPLE1BSkU7QUFLVEMsYUFBUyxLQUxBO0FBTVRDLGtCQUFjLEtBTkw7QUFPVEMsZ0JBQVk7QUFQSDtBQUxDLENBQWQ7O0lBZ0JNQyxPOzs7Ozs7Ozs7Ozt5Q0FDaUI7QUFDbkIsV0FBS0MsS0FBTCxDQUFXQyxVQUFYO0FBQ0Q7OzsrQkFDVUMsTyxFQUFTO0FBQ2xCLFVBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osZUFDRTtBQUFBO0FBQUEsWUFBUSxTQUFNLG9CQUFkLEVBQW1DLE1BQUssUUFBeEMsRUFBaUQsU0FBUyxLQUFLRixLQUFMLENBQVdDLFVBQXJFO0FBQ0dFLGVBQUtDLENBQUwsQ0FBTyxhQUFQO0FBREgsU0FERjtBQUtEO0FBQ0QsYUFDRSwyQkFERjtBQUlEOzs7Z0NBRVdGLE8sRUFBUztBQUNuQixVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQ0csWUFBVyxNQUFaLEVBQVo7QUFDRSwrQ0FERjtBQUVFO0FBQUE7QUFBQSxZQUFNLE9BQU9oQixNQUFNQyxXQUFuQjtBQUFpQ2EsZUFBS0csd0JBQUwsQ0FBOEIsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CQyxNQUFqRDtBQUFqQztBQUZGLE9BREY7QUFNRDs7OzhCQUVTQyxLLEVBQU07QUFDZCxVQUFJQSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBUTtBQUFBO0FBQUEsWUFBRyxPQUFPcEIsTUFBTUksU0FBaEI7QUFBQTtBQUFtQ2dCLGdCQUFNQztBQUF6QyxTQUFSO0FBQ0Q7QUFDRDtBQUNEOzs7OEJBRVNDLFEsRUFBVUMsTyxFQUFTO0FBQzNCLGFBQVFELGFBQWFDLE9BQWQsR0FDTDtBQUFBO0FBQUE7QUFBTSxnQ0FBSyxLQUFJLEVBQVQ7QUFBTixPQURLLEdBRUYsS0FGTDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFNBQU0sV0FBWCxFQUF1QixPQUFPLEVBQUNQLFlBQVcsTUFBWixFQUFvQmQsV0FBVSxRQUE5QixFQUE5QjtBQUNHLGFBQUtzQixXQUFMLENBQWlCLEtBQUtiLEtBQUwsQ0FBV08sT0FBWCxDQUFtQkwsT0FBcEMsQ0FESDtBQUNnRCxrQ0FEaEQ7QUFFRyxhQUFLRixLQUFMLENBQVdPLE9BQVgsQ0FBbUJFLEtBQW5CLENBQXlCSyxHQUF6QixDQUE2QjtBQUFBLGlCQUFLLE9BQUtDLFNBQUwsQ0FBZUMsQ0FBZixDQUFMO0FBQUEsU0FBN0IsQ0FGSDtBQUdLLGFBQUtoQixLQUFMLENBQVdPLE9BQVgsQ0FBbUJBLE9BQW5CLENBQTJCTyxHQUEzQixDQUErQjtBQUFBLGlCQUM5QixnQ0FBSyxTQUFTRyxPQUFkLEdBRDhCO0FBQUEsU0FBL0IsQ0FITDtBQU1HLGFBQUtDLFVBQUwsQ0FBZ0IsS0FBS2xCLEtBQUwsQ0FBV08sT0FBWCxDQUFtQkwsT0FBbkMsQ0FOSDtBQU0rQztBQU4vQyxPQURGO0FBVUQ7Ozs7OztBQUlILElBQU1pQixrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xiLGFBQVNhLE1BQU1iO0FBRFYsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU87QUFDTHJCLGdCQUFZLDJEQUE4QnFCLFFBQTlCO0FBRFAsR0FBUDtBQUdELENBSkQ7O2tCQU1lLDBCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkN0QixPQUE3QyxDIiwiZmlsZSI6Im1ldHJpY3NQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3ByZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldE1ldHJpY3MgfSBmcm9tICcuL21ldHJpY3NBY3Rpb25zJztcblxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEJveCBmcm9tICcuL2NvbXBvbmVudHMvYm94JztcblxuaW1wb3J0IGNvbG9yU2NhbGUgZnJvbSAnc2ltcGxlLWNvbG9yLXNjYWxlJztcblxuY29sb3JTY2FsZS5zZXRDb25maWcoe1xuICBvdXRwdXRTdGFydDoxLFxuICBvdXRwdXRFbmQ6MTAwLFxuICBpbnB1dFN0YXJ0OjAsXG4gIGlucHV0RW5kOjMwXG59KTtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHRleHRMb2FkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIHRleHRFcnJvcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Q1NTIwNicsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBwYWRkaW5nOiAnNXB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICB9XG59O1xuXG5jbGFzcyBNZXRyaWNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZ2V0TWV0cmljcygpO1xuICB9XG4gIHNob3dCdXR0b24obG9hZGluZykge1xuICAgIGlmICghbG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBncmVlbiBibG9ja1wiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmdldE1ldHJpY3N9PlxuICAgICAgICAgIHtJMThuLnQoJ0dldCBtZXRyaWNzJyl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc2hvd0xvYWRpbmcobG9hZGluZykge1xuICAgIGlmICghbG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6JzUwcHgnfX0+XG4gICAgICAgIDxMb2FkaW5nPjwvTG9hZGluZz5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlLnRleHRMb2FkaW5nfT57STE4bi50cmFuc2xhdGVXaXRob3V0STE4bmxpbmUodGhpcy5wcm9wcy5tZXRyaWNzLnN0YXR1cyl9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHNob3dFcnJvcihlcnJvcil7XG4gICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gKDxwIHN0eWxlPXtzdHlsZS50ZXh0RXJyb3J9PkVycm9yOiB7ZXJyb3IubXNnfTwvcD4pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpc0dhdGV3YXkoaG9zdG5hbWUsIGdhdGV3YXkpIHtcbiAgICByZXR1cm4gKGhvc3RuYW1lID09PSBnYXRld2F5KT8gKFxuICAgICAgPHNwYW4+PGltZyBzcmM9XCJcIi8+PC9zcGFuPlxuICAgICkgOiAoZmFsc2UpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT17e3BhZGRpbmdUb3A6JzUwcHgnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAge3RoaXMuc2hvd0xvYWRpbmcodGhpcy5wcm9wcy5tZXRyaWNzLmxvYWRpbmcpfTxiciAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5tZXRyaWNzLmVycm9yLm1hcCh4ID0+IHRoaXMuc2hvd0Vycm9yKHgpKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tZXRyaWNzLm1ldHJpY3MubWFwKHN0YXRpb24gPT4gKFxuICAgICAgICAgICAgPEJveCBzdGF0aW9uPXtzdGF0aW9ufSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIHt0aGlzLnNob3dCdXR0b24odGhpcy5wcm9wcy5tZXRyaWNzLmxvYWRpbmcpfTxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1ldHJpY3M6IHN0YXRlLm1ldHJpY3NcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldE1ldHJpY3M6IGJpbmRBY3Rpb25DcmVhdG9ycyhnZXRNZXRyaWNzLGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWV0cmljcyk7XG4iXX0=