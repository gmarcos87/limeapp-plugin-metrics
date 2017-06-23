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
  },
  box: {
    margin: '3px',
    padding: '10px',
    fontSize: '1.4em',
    background: '#f5f5f5',
    textAalign: 'center',
    overflow: 'hidden',
    height: 'auto'
  },
  loadingBox: {
    position: 'fixed',
    marginTop: '40vh',
    zIndex: '5555',
    background: 'rgb(255, 255, 255)',
    width: '60vw',
    top: '0px',
    left: '20vw',
    borderRadius: '11px',
    padding: '10%',
    boxShadow: '1px 1px 6px rgba(0,0,0,0.5)'
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
      var _this2 = this;

      if (!loading) {
        return (0, _preact.h)(
          'div',
          { 'class': 'row' },
          (0, _preact.h)('br', null),
          (0, _preact.h)(
            'button',
            { 'class': 'button green block u-full-width', type: 'submit', onClick: function onClick() {
                return _this2.props.getMetricsGateway(_this2.props.metrics.gateway);
              } },
            I18n.t('Only gateway')
          ),
          (0, _preact.h)(
            'button',
            { 'class': 'button green block u-full-width', type: 'submit', onClick: this.props.getMetricsAll },
            I18n.t('Full path metrics')
          )
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
        { style: style.loadingBox },
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
      return hostname === gateway ? true : false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (0, _preact.h)(
        'div',
        { 'class': 'container', style: { paddingTop: '80px', textAlign: 'center' } },
        this.props.metrics.error.map(function (x) {
          return _this3.showError(x);
        }),
        (0, _preact.h)(
          'div',
          { style: style.box },
          I18n.t('From') + ' ' + this.props.meta.selectedHost
        ),
        this.props.metrics.metrics.map(function (station) {
          return (0, _preact.h)(_box2.default, { station: station, click: function click() {
              return _this3.props.changeNode(station.hostname.split('_')[0]);
            }, gateway: _this3.isGateway(station.hostname, _this3.props.metrics.gateway) });
        }),
        (0, _preact.h)(
          'div',
          { style: style.box },
          I18n.t('To Internet')
        ),
        this.showLoading(this.props.metrics.loading),
        this.showButton(this.props.metrics.loading),
        (0, _preact.h)('br', null)
      );
    }
  }]);

  return Metrics;
}(_preact.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    metrics: state.metrics,
    meta: state.meta
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMetrics: (0, _redux.bindActionCreators)(_metricsActions.getMetrics, dispatch),
    getMetricsGateway: (0, _redux.bindActionCreators)(_metricsActions.getMetricsGateway, dispatch),
    getMetricsAll: (0, _redux.bindActionCreators)(_metricsActions.getMetricsAll, dispatch),
    changeNode: (0, _redux.bindActionCreators)(_metricsActions.changeNode, dispatch)
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps, mapDispatchToProps)(Metrics);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwidGV4dExvYWRpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwidGV4dEVycm9yIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJib3giLCJtYXJnaW4iLCJmb250U2l6ZSIsInRleHRBYWxpZ24iLCJvdmVyZmxvdyIsImhlaWdodCIsImxvYWRpbmdCb3giLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsInpJbmRleCIsIndpZHRoIiwidG9wIiwibGVmdCIsImJveFNoYWRvdyIsIk1ldHJpY3MiLCJwcm9wcyIsImdldE1ldHJpY3MiLCJsb2FkaW5nIiwiZ2V0TWV0cmljc0dhdGV3YXkiLCJtZXRyaWNzIiwiZ2F0ZXdheSIsIkkxOG4iLCJ0IiwiZ2V0TWV0cmljc0FsbCIsInRyYW5zbGF0ZVdpdGhvdXRJMThubGluZSIsInN0YXR1cyIsImVycm9yIiwibXNnIiwiaG9zdG5hbWUiLCJwYWRkaW5nVG9wIiwibWFwIiwic2hvd0Vycm9yIiwieCIsIm1ldGEiLCJzZWxlY3RlZEhvc3QiLCJzdGF0aW9uIiwiY2hhbmdlTm9kZSIsInNwbGl0IiwiaXNHYXRld2F5Iiwic2hvd0xvYWRpbmciLCJzaG93QnV0dG9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLDJCQUFXQSxTQUFYLENBQXFCO0FBQ25CQyxlQUFZLENBRE87QUFFbkJDLGFBQVUsR0FGUztBQUduQkMsY0FBVyxDQUhRO0FBSW5CQyxZQUFTO0FBSlUsQ0FBckI7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QUF6QixFQUE2QzdCLE9BQTdDLEMiLCJmaWxlIjoibWV0cmljc1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncHJlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0TWV0cmljcywgZ2V0TWV0cmljc0FsbCwgZ2V0TWV0cmljc0dhdGV3YXksIGNoYW5nZU5vZGUgfSBmcm9tICcuL21ldHJpY3NBY3Rpb25zJztcblxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9jb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IEJveCBmcm9tICcuL2NvbXBvbmVudHMvYm94JztcblxuaW1wb3J0IGNvbG9yU2NhbGUgZnJvbSAnc2ltcGxlLWNvbG9yLXNjYWxlJztcblxuY29sb3JTY2FsZS5zZXRDb25maWcoe1xuICBvdXRwdXRTdGFydDoxLFxuICBvdXRwdXRFbmQ6MTAwLFxuICBpbnB1dFN0YXJ0OjAsXG4gIGlucHV0RW5kOjMwXG59KTtcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHRleHRMb2FkaW5nOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIHRleHRFcnJvcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Q1NTIwNicsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBwYWRkaW5nOiAnNXB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICB9LFxuICBib3g6IHtcbiAgICBtYXJnaW46ICczcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBmb250U2l6ZTogJzEuNGVtJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXG4gICAgdGV4dEFhbGlnbjogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogJ2F1dG8nXG4gIH0sXG4gIGxvYWRpbmdCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBtYXJnaW5Ub3A6ICc0MHZoJyxcbiAgICB6SW5kZXg6ICc1NTU1JyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiKDI1NSwgMjU1LCAyNTUpJyxcbiAgICB3aWR0aDogJzYwdncnLFxuICAgIHRvcDogJzBweCcsXG4gICAgbGVmdDogJzIwdncnLFxuICAgIGJvcmRlclJhZGl1czogJzExcHgnLFxuICAgIHBhZGRpbmc6ICcxMCUnLFxuICAgIGJveFNoYWRvdzogJzFweCAxcHggNnB4IHJnYmEoMCwwLDAsMC41KSdcbiAgfVxufTtcblxuY2xhc3MgTWV0cmljcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldE1ldHJpY3MoKTtcbiAgfVxuICBzaG93QnV0dG9uKGxvYWRpbmcpIHtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gZ3JlZW4gYmxvY2sgdS1mdWxsLXdpZHRoXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmdldE1ldHJpY3NHYXRld2F5KHRoaXMucHJvcHMubWV0cmljcy5nYXRld2F5KX0+XG4gICAgICAgICAgICB7STE4bi50KCdPbmx5IGdhdGV3YXknKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdyZWVuIGJsb2NrIHUtZnVsbC13aWR0aFwiICB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5wcm9wcy5nZXRNZXRyaWNzQWxsfT5cbiAgICAgICAgICAgIHtJMThuLnQoJ0Z1bGwgcGF0aCBtZXRyaWNzJyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc2hvd0xvYWRpbmcobG9hZGluZykge1xuICAgIGlmICghbG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGUubG9hZGluZ0JveH0+XG4gICAgICAgIDxMb2FkaW5nPjwvTG9hZGluZz5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlLnRleHRMb2FkaW5nfT57STE4bi50cmFuc2xhdGVXaXRob3V0STE4bmxpbmUodGhpcy5wcm9wcy5tZXRyaWNzLnN0YXR1cyl9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHNob3dFcnJvcihlcnJvcil7XG4gICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gKDxwIHN0eWxlPXtzdHlsZS50ZXh0RXJyb3J9PkVycm9yOiB7ZXJyb3IubXNnfTwvcD4pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpc0dhdGV3YXkoaG9zdG5hbWUsIGdhdGV3YXkpIHtcbiAgICByZXR1cm4gKGhvc3RuYW1lID09PSBnYXRld2F5KT8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT17e3BhZGRpbmdUb3A6JzgwcHgnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAge3RoaXMucHJvcHMubWV0cmljcy5lcnJvci5tYXAoeCA9PiB0aGlzLnNob3dFcnJvcih4KSl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuYm94fT57STE4bi50KCdGcm9tJykrJyAnK3RoaXMucHJvcHMubWV0YS5zZWxlY3RlZEhvc3R9PC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMubWV0cmljcy5tZXRyaWNzLm1hcChzdGF0aW9uID0+IChcbiAgICAgICAgICAgIDxCb3ggc3RhdGlvbj17c3RhdGlvbn0gY2xpY2s9eygpPT50aGlzLnByb3BzLmNoYW5nZU5vZGUoc3RhdGlvbi5ob3N0bmFtZS5zcGxpdCgnXycpWzBdKX0gZ2F0ZXdheT17dGhpcy5pc0dhdGV3YXkoc3RhdGlvbi5ob3N0bmFtZSx0aGlzLnByb3BzLm1ldHJpY3MuZ2F0ZXdheSl9Lz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmJveH0+e0kxOG4udCgnVG8gSW50ZXJuZXQnKX08L2Rpdj5cbiAgICAgICAge3RoaXMuc2hvd0xvYWRpbmcodGhpcy5wcm9wcy5tZXRyaWNzLmxvYWRpbmcpfVxuICAgICAgICB7dGhpcy5zaG93QnV0dG9uKHRoaXMucHJvcHMubWV0cmljcy5sb2FkaW5nKX08YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXRyaWNzOiBzdGF0ZS5tZXRyaWNzLFxuICAgIG1ldGE6IHN0YXRlLm1ldGFcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdldE1ldHJpY3M6IGJpbmRBY3Rpb25DcmVhdG9ycyhnZXRNZXRyaWNzLGRpc3BhdGNoKSxcbiAgICBnZXRNZXRyaWNzR2F0ZXdheTogYmluZEFjdGlvbkNyZWF0b3JzKGdldE1ldHJpY3NHYXRld2F5LGRpc3BhdGNoKSxcbiAgICBnZXRNZXRyaWNzQWxsOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0TWV0cmljc0FsbCxkaXNwYXRjaCksXG4gICAgY2hhbmdlTm9kZTogYmluZEFjdGlvbkNyZWF0b3JzKGNoYW5nZU5vZGUsZGlzcGF0Y2gpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXRyaWNzKTtcbiJdfQ==