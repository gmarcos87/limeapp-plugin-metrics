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
          return (0, _preact.h)(_box2.default, { station: station, click: function click() {
              return _this2.props.changeNode(station.hostname.split('_')[0]);
            } });
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
    getMetrics: (0, _redux.bindActionCreators)(_metricsActions.getMetrics, dispatch),
    changeNode: (0, _redux.bindActionCreators)(_metricsActions.changeNode, dispatch)
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps, mapDispatchToProps)(Metrics);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRyaWNzUGFnZS5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwidGV4dExvYWRpbmciLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwidGV4dEVycm9yIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJNZXRyaWNzIiwicHJvcHMiLCJnZXRNZXRyaWNzIiwibG9hZGluZyIsIkkxOG4iLCJ0IiwicGFkZGluZ1RvcCIsInRyYW5zbGF0ZVdpdGhvdXRJMThubGluZSIsIm1ldHJpY3MiLCJzdGF0dXMiLCJlcnJvciIsIm1zZyIsImhvc3RuYW1lIiwiZ2F0ZXdheSIsInNob3dMb2FkaW5nIiwibWFwIiwic2hvd0Vycm9yIiwieCIsInN0YXRpb24iLCJjaGFuZ2VOb2RlIiwic3BsaXQiLCJzaG93QnV0dG9uIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLDJCQUFXQSxTQUFYLENBQXFCO0FBQ25CQyxlQUFZLENBRE87QUFFbkJDLGFBQVUsR0FGUztBQUduQkMsY0FBVyxDQUhRO0FBSW5CQyxZQUFTO0FBSlUsQ0FBckI7O0FBT0EsSUFBTUMsUUFBUTtBQUNaQyxlQUFhO0FBQ1hDLGVBQVcsUUFEQTtBQUVYQyxhQUFTO0FBRkUsR0FERDtBQUtaQyxhQUFXO0FBQ1RGLGVBQVcsUUFERjtBQUVUQyxhQUFTLE9BRkE7QUFHVEUsZ0JBQVksU0FISDtBQUlUQyxXQUFPLE1BSkU7QUFLVEMsYUFBUyxLQUxBO0FBTVRDLGtCQUFjLEtBTkw7QUFPVEMsZ0JBQVk7QUFQSDtBQUxDLENBQWQ7O0lBZ0JNQyxPOzs7Ozs7Ozs7Ozt5Q0FDaUI7QUFDbkIsV0FBS0MsS0FBTCxDQUFXQyxVQUFYO0FBQ0Q7OzsrQkFDVUMsTyxFQUFTO0FBQ2xCLFVBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osZUFDRTtBQUFBO0FBQUEsWUFBUSxTQUFNLG9CQUFkLEVBQW1DLE1BQUssUUFBeEMsRUFBaUQsU0FBUyxLQUFLRixLQUFMLENBQVdDLFVBQXJFO0FBQ0dFLGVBQUtDLENBQUwsQ0FBTyxhQUFQO0FBREgsU0FERjtBQUtEO0FBQ0QsYUFDRSwyQkFERjtBQUlEOzs7Z0NBRVdGLE8sRUFBUztBQUNuQixVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaO0FBQ0Q7QUFDRCxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQ0csWUFBVyxNQUFaLEVBQVo7QUFDRSwrQ0FERjtBQUVFO0FBQUE7QUFBQSxZQUFNLE9BQU9oQixNQUFNQyxXQUFuQjtBQUFpQ2EsZUFBS0csd0JBQUwsQ0FBOEIsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CQyxNQUFqRDtBQUFqQztBQUZGLE9BREY7QUFNRDs7OzhCQUVTQyxLLEVBQU07QUFDZCxVQUFJQSxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZUFBUTtBQUFBO0FBQUEsWUFBRyxPQUFPcEIsTUFBTUksU0FBaEI7QUFBQTtBQUFtQ2dCLGdCQUFNQztBQUF6QyxTQUFSO0FBQ0Q7QUFDRDtBQUNEOzs7OEJBRVNDLFEsRUFBVUMsTyxFQUFTO0FBQzNCLGFBQVFELGFBQWFDLE9BQWQsR0FDTDtBQUFBO0FBQUE7QUFBTSxnQ0FBSyxLQUFJLEVBQVQ7QUFBTixPQURLLEdBRUYsS0FGTDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFNBQU0sV0FBWCxFQUF1QixPQUFPLEVBQUNQLFlBQVcsTUFBWixFQUFvQmQsV0FBVSxRQUE5QixFQUE5QjtBQUNHLGFBQUtzQixXQUFMLENBQWlCLEtBQUtiLEtBQUwsQ0FBV08sT0FBWCxDQUFtQkwsT0FBcEMsQ0FESDtBQUNnRCxrQ0FEaEQ7QUFFRyxhQUFLRixLQUFMLENBQVdPLE9BQVgsQ0FBbUJFLEtBQW5CLENBQXlCSyxHQUF6QixDQUE2QjtBQUFBLGlCQUFLLE9BQUtDLFNBQUwsQ0FBZUMsQ0FBZixDQUFMO0FBQUEsU0FBN0IsQ0FGSDtBQUdLLGFBQUtoQixLQUFMLENBQVdPLE9BQVgsQ0FBbUJBLE9BQW5CLENBQTJCTyxHQUEzQixDQUErQjtBQUFBLGlCQUM5QixnQ0FBSyxTQUFTRyxPQUFkLEVBQXVCLE9BQU87QUFBQSxxQkFBSSxPQUFLakIsS0FBTCxDQUFXa0IsVUFBWCxDQUFzQkQsUUFBUU4sUUFBUixDQUFpQlEsS0FBakIsQ0FBdUIsR0FBdkIsRUFBNEIsQ0FBNUIsQ0FBdEIsQ0FBSjtBQUFBLGFBQTlCLEdBRDhCO0FBQUEsU0FBL0IsQ0FITDtBQU1HLGFBQUtDLFVBQUwsQ0FBZ0IsS0FBS3BCLEtBQUwsQ0FBV08sT0FBWCxDQUFtQkwsT0FBbkMsQ0FOSDtBQU0rQztBQU4vQyxPQURGO0FBVUQ7Ozs7OztBQUlILElBQU1tQixrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xmLGFBQVNlLE1BQU1mO0FBRFYsR0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTWdCLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUN2QyxTQUFPO0FBQ0x2QixnQkFBWSwyREFBOEJ1QixRQUE5QixDQURQO0FBRUxOLGdCQUFZLDJEQUE4Qk0sUUFBOUI7QUFGUCxHQUFQO0FBSUQsQ0FMRDs7a0JBT2UsMEJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3hCLE9BQTdDLEMiLCJmaWxlIjoibWV0cmljc1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncHJlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0TWV0cmljcywgY2hhbmdlTm9kZSB9IGZyb20gJy4vbWV0cmljc0FjdGlvbnMnO1xuXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgQm94IGZyb20gJy4vY29tcG9uZW50cy9ib3gnO1xuXG5pbXBvcnQgY29sb3JTY2FsZSBmcm9tICdzaW1wbGUtY29sb3Itc2NhbGUnO1xuXG5jb2xvclNjYWxlLnNldENvbmZpZyh7XG4gIG91dHB1dFN0YXJ0OjEsXG4gIG91dHB1dEVuZDoxMDAsXG4gIGlucHV0U3RhcnQ6MCxcbiAgaW5wdXRFbmQ6MzBcbn0pO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgdGV4dExvYWRpbmc6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgdGV4dEVycm9yOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGJhY2tncm91bmQ6ICcjZDU1MjA2JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHBhZGRpbmc6ICc1cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnXG4gIH1cbn07XG5cbmNsYXNzIE1ldHJpY3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5nZXRNZXRyaWNzKCk7XG4gIH1cbiAgc2hvd0J1dHRvbihsb2FkaW5nKSB7XG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdyZWVuIGJsb2NrXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ2V0TWV0cmljc30+XG4gICAgICAgICAge0kxOG4udCgnR2V0IG1ldHJpY3MnKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBzaG93TG9hZGluZyhsb2FkaW5nKSB7XG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDonNTBweCd9fT5cbiAgICAgICAgPExvYWRpbmc+PC9Mb2FkaW5nPlxuICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGUudGV4dExvYWRpbmd9PntJMThuLnRyYW5zbGF0ZVdpdGhvdXRJMThubGluZSh0aGlzLnByb3BzLm1ldHJpY3Muc3RhdHVzKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc2hvd0Vycm9yKGVycm9yKXtcbiAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiAoPHAgc3R5bGU9e3N0eWxlLnRleHRFcnJvcn0+RXJyb3I6IHtlcnJvci5tc2d9PC9wPik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzR2F0ZXdheShob3N0bmFtZSwgZ2F0ZXdheSkge1xuICAgIHJldHVybiAoaG9zdG5hbWUgPT09IGdhdGV3YXkpPyAoXG4gICAgICA8c3Bhbj48aW1nIHNyYz1cIlwiLz48L3NwYW4+XG4gICAgKSA6IChmYWxzZSk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZ1RvcDonNTBweCcsIHRleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICB7dGhpcy5zaG93TG9hZGluZyh0aGlzLnByb3BzLm1ldHJpY3MubG9hZGluZyl9PGJyIC8+XG4gICAgICAgIHt0aGlzLnByb3BzLm1ldHJpY3MuZXJyb3IubWFwKHggPT4gdGhpcy5zaG93RXJyb3IoeCkpfVxuICAgICAgICAgIHt0aGlzLnByb3BzLm1ldHJpY3MubWV0cmljcy5tYXAoc3RhdGlvbiA9PiAoXG4gICAgICAgICAgICA8Qm94IHN0YXRpb249e3N0YXRpb259IGNsaWNrPXsoKT0+dGhpcy5wcm9wcy5jaGFuZ2VOb2RlKHN0YXRpb24uaG9zdG5hbWUuc3BsaXQoJ18nKVswXSl9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAge3RoaXMuc2hvd0J1dHRvbih0aGlzLnByb3BzLm1ldHJpY3MubG9hZGluZyl9PGJyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWV0cmljczogc3RhdGUubWV0cmljc1xuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZ2V0TWV0cmljczogYmluZEFjdGlvbkNyZWF0b3JzKGdldE1ldHJpY3MsZGlzcGF0Y2gpLFxuICAgIGNoYW5nZU5vZGU6IGJpbmRBY3Rpb25DcmVhdG9ycyhjaGFuZ2VOb2RlLGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWV0cmljcyk7XG4iXX0=