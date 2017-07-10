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
    marginTop: '30vh',
    zIndex: '5555',
    background: 'rgb(255, 255, 255)',
    width: '200px',
    top: '0px',
    left: 'calc(50% - 100px)',
    borderRadius: '11px',
    padding: '15px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwidGV4dExvYWRpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwidGV4dEVycm9yIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJib3giLCJtYXJnaW4iLCJmb250U2l6ZSIsInRleHRBYWxpZ24iLCJvdmVyZmxvdyIsImhlaWdodCIsImxvYWRpbmdCb3giLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsInpJbmRleCIsIndpZHRoIiwidG9wIiwibGVmdCIsImJveFNoYWRvdyIsIk1ldHJpY3MiLCJwcm9wcyIsImdldE1ldHJpY3MiLCJsb2FkaW5nIiwiZ2V0TWV0cmljc0dhdGV3YXkiLCJtZXRyaWNzIiwiZ2F0ZXdheSIsIkkxOG4iLCJ0IiwiZ2V0TWV0cmljc0FsbCIsInRyYW5zbGF0ZVdpdGhvdXRJMThubGluZSIsInN0YXR1cyIsImVycm9yIiwibXNnIiwiaG9zdG5hbWUiLCJwYWRkaW5nVG9wIiwibWFwIiwic2hvd0Vycm9yIiwieCIsIm1ldGEiLCJzZWxlY3RlZEhvc3QiLCJzdGF0aW9uIiwiY2hhbmdlTm9kZSIsInNwbGl0IiwiaXNHYXRld2F5Iiwic2hvd0xvYWRpbmciLCJzaG93QnV0dG9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLDJCQUFXQSxTQUFYLENBQXFCO0FBQ25CQyxlQUFZLENBRE87QUFFbkJDLGFBQVUsR0FGUztBQUduQkMsY0FBVyxDQUhRO0FBSW5CQyxZQUFTO0FBSlUsQ0FBckI7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QkFBekIsRUFBNkM3QixPQUE3QyxDIiwiZmlsZSI6Im1ldHJpY3NQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3ByZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldE1ldHJpY3MsIGdldE1ldHJpY3NBbGwsIGdldE1ldHJpY3NHYXRld2F5LCBjaGFuZ2VOb2RlIH0gZnJvbSAnLi9tZXRyaWNzQWN0aW9ucyc7XG5cbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCBCb3ggZnJvbSAnLi9jb21wb25lbnRzL2JveCc7XG5cbmltcG9ydCBjb2xvclNjYWxlIGZyb20gJ3NpbXBsZS1jb2xvci1zY2FsZSc7XG5cbmNvbG9yU2NhbGUuc2V0Q29uZmlnKHtcbiAgb3V0cHV0U3RhcnQ6MSxcbiAgb3V0cHV0RW5kOjEwMCxcbiAgaW5wdXRTdGFydDowLFxuICBpbnB1dEVuZDozMFxufSk7XG5cbmNvbnN0IHN0eWxlID0ge1xuICB0ZXh0TG9hZGluZzoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICB0ZXh0RXJyb3I6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgYmFja2dyb3VuZDogJyNkNTUyMDYnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgcGFkZGluZzogJzVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgfSxcbiAgYm94OiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgZm9udFNpemU6ICcxLjRlbScsXG4gICAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuICAgIHRleHRBYWxpZ246ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LFxuICBsb2FkaW5nQm94OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbWFyZ2luVG9wOiAnMzB2aCcsXG4gICAgekluZGV4OiAnNTU1NScsXG4gICAgYmFja2dyb3VuZDogJ3JnYigyNTUsIDI1NSwgMjU1KScsXG4gICAgd2lkdGg6ICcyMDBweCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBsZWZ0OiAnY2FsYyg1MCUgLSAxMDBweCknLFxuICAgIGJvcmRlclJhZGl1czogJzExcHgnLFxuICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICBib3hTaGFkb3c6ICcxcHggMXB4IDZweCByZ2JhKDAsMCwwLDAuNSknXG4gIH1cbn07XG5cbmNsYXNzIE1ldHJpY3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRNZXRyaWNzKCk7XG4gIH1cbiAgc2hvd0J1dHRvbihsb2FkaW5nKSB7XG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdyZWVuIGJsb2NrIHUtZnVsbC13aWR0aFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5nZXRNZXRyaWNzR2F0ZXdheSh0aGlzLnByb3BzLm1ldHJpY3MuZ2F0ZXdheSl9PlxuICAgICAgICAgICAge0kxOG4udCgnT25seSBnYXRld2F5Jyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBncmVlbiBibG9jayB1LWZ1bGwtd2lkdGhcIiAgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ2V0TWV0cmljc0FsbH0+XG4gICAgICAgICAgICB7STE4bi50KCdGdWxsIHBhdGggbWV0cmljcycpfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHNob3dMb2FkaW5nKGxvYWRpbmcpIHtcbiAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmxvYWRpbmdCb3h9PlxuICAgICAgICA8TG9hZGluZz48L0xvYWRpbmc+XG4gICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZS50ZXh0TG9hZGluZ30+e0kxOG4udHJhbnNsYXRlV2l0aG91dEkxOG5saW5lKHRoaXMucHJvcHMubWV0cmljcy5zdGF0dXMpfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzaG93RXJyb3IoZXJyb3Ipe1xuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICg8cCBzdHlsZT17c3R5bGUudGV4dEVycm9yfT5FcnJvcjoge2Vycm9yLm1zZ308L3A+KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNHYXRld2F5KGhvc3RuYW1lLCBnYXRld2F5KSB7XG4gICAgcmV0dXJuIChob3N0bmFtZSA9PT0gZ2F0ZXdheSk/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9e3twYWRkaW5nVG9wOic4MHB4JywgdGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgIHt0aGlzLnByb3BzLm1ldHJpY3MuZXJyb3IubWFwKHggPT4gdGhpcy5zaG93RXJyb3IoeCkpfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmJveH0+e0kxOG4udCgnRnJvbScpKycgJyt0aGlzLnByb3BzLm1ldGEuc2VsZWN0ZWRIb3N0fTwvZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1ldHJpY3MubWV0cmljcy5tYXAoc3RhdGlvbiA9PiAoXG4gICAgICAgICAgICA8Qm94IHN0YXRpb249e3N0YXRpb259IGNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jaGFuZ2VOb2RlKHN0YXRpb24uaG9zdG5hbWUuc3BsaXQoJ18nKVswXSl9IGdhdGV3YXk9e3RoaXMuaXNHYXRld2F5KHN0YXRpb24uaG9zdG5hbWUsdGhpcy5wcm9wcy5tZXRyaWNzLmdhdGV3YXkpfS8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5ib3h9PntJMThuLnQoJ1RvIEludGVybmV0Jyl9PC9kaXY+XG4gICAgICAgIHt0aGlzLnNob3dMb2FkaW5nKHRoaXMucHJvcHMubWV0cmljcy5sb2FkaW5nKX1cbiAgICAgICAge3RoaXMuc2hvd0J1dHRvbih0aGlzLnByb3BzLm1ldHJpY3MubG9hZGluZyl9PGJyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWV0cmljczogc3RhdGUubWV0cmljcyxcbiAgICBtZXRhOiBzdGF0ZS5tZXRhXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBnZXRNZXRyaWNzOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZ2V0TWV0cmljcyxkaXNwYXRjaCksXG4gICAgZ2V0TWV0cmljc0dhdGV3YXk6IGJpbmRBY3Rpb25DcmVhdG9ycyhnZXRNZXRyaWNzR2F0ZXdheSxkaXNwYXRjaCksXG4gICAgZ2V0TWV0cmljc0FsbDogYmluZEFjdGlvbkNyZWF0b3JzKGdldE1ldHJpY3NBbGwsZGlzcGF0Y2gpLFxuICAgIGNoYW5nZU5vZGU6IGJpbmRBY3Rpb25DcmVhdG9ycyhjaGFuZ2VOb2RlLGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWV0cmljcyk7XG4iXX0=