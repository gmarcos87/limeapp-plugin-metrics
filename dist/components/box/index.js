'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

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
  box: {
    margin: '3px',
    padding: '10px',
    background: '#f5f5f5',
    textAalign: 'center',
    transition: 'height 04s ease',
    overflow: 'hidden',
    height: 'auto'
  },
  loading: {
    margin: '3px',
    padding: '10px',
    background: '#f5f5f5',
    textAalign: 'center',
    overflow: 'hidden',
    height: '34px',
    transition: 'height 04s ease'
  },
  line: {
    margin: '0 auto',
    height: '8px',
    backgroundColor: '#ccc'
  },
  gateway: {
    marginButtom: '0px',
    marginTop: '-9px',
    fontSize: '2.4rem',
    lineHeight: '1.35'
  }
};

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'barStyle',
    value: function barStyle(loss) {
      return Object.assign({}, style.line, {
        width: (this.props.station.bandwidth * 100 / 20).toString() + '%',
        backgroundColor: _simpleColorScale2.default.getColor(loss)
      });
    }
  }, {
    key: 'isGateway',
    value: function isGateway(gateway, hostname) {
      return gateway === true ? hostname + ' (Gateway)' : hostname;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _preact.h)(
        'div',
        { style: this.props.station.loading ? style.loading : style.box, onClick: function onClick() {
            return _this2.props.click();
          } },
        (0, _preact.h)(
          'span',
          null,
          (0, _preact.h)(
            'b',
            null,
            this.isGateway(this.props.gateway, this.props.station.hostname)
          ),
          (0, _preact.h)('br', null)
        ),
        this.props.station.bandwidth,
        ' Mbps / ',
        (0, _preact.h)(
          'span',
          null,
          I18n.t('Package loss')
        ),
        ' ',
        this.props.station.loss,
        '%',
        (0, _preact.h)('br', null),
        (0, _preact.h)('div', { style: this.barStyle(this.props.station.loss) })
      );
    }
  }]);

  return Box;
}(_preact.Component);

exports.default = Box;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JveC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwiYm94IiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0ZXh0QWFsaWduIiwidHJhbnNpdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibG9hZGluZyIsImxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnYXRld2F5IiwibWFyZ2luQnV0dG9tIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiQm94IiwibG9zcyIsIk9iamVjdCIsImFzc2lnbiIsIndpZHRoIiwicHJvcHMiLCJzdGF0aW9uIiwiYmFuZHdpZHRoIiwidG9TdHJpbmciLCJnZXRDb2xvciIsImhvc3RuYW1lIiwiY2xpY2siLCJpc0dhdGV3YXkiLCJJMThuIiwidCIsImJhclN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSwyQkFBV0EsU0FBWCxDQUFxQjtBQUNuQkMsZUFBWSxDQURPO0FBRW5CQyxhQUFVLEdBRlM7QUFHbkJDLGNBQVcsQ0FIUTtBQUluQkMsWUFBUztBQUpVLENBQXJCOztBQU9BLElBQU1DLFFBQVE7QUFDWkMsT0FBSztBQUNIQyxZQUFRLEtBREw7QUFFSEMsYUFBUyxNQUZOO0FBR0hDLGdCQUFZLFNBSFQ7QUFJSEMsZ0JBQVksUUFKVDtBQUtIQyxnQkFBWSxpQkFMVDtBQU1IQyxjQUFVLFFBTlA7QUFPSEMsWUFBUTtBQVBMLEdBRE87QUFVWkMsV0FBUztBQUNQUCxZQUFRLEtBREQ7QUFFUEMsYUFBUyxNQUZGO0FBR1BDLGdCQUFZLFNBSEw7QUFJUEMsZ0JBQVksUUFKTDtBQUtQRSxjQUFVLFFBTEg7QUFNUEMsWUFBUSxNQU5EO0FBT1BGLGdCQUFZO0FBUEwsR0FWRztBQW1CWkksUUFBTTtBQUNKUixZQUFRLFFBREo7QUFFSk0sWUFBUSxLQUZKO0FBR0pHLHFCQUFpQjtBQUhiLEdBbkJNO0FBd0JaQyxXQUFTO0FBQ1BDLGtCQUFjLEtBRFA7QUFFUEMsZUFBVyxNQUZKO0FBR1BDLGNBQVUsUUFISDtBQUlQQyxnQkFBWTtBQUpMO0FBeEJHLENBQWQ7O0lBaUNNQyxHOzs7Ozs7Ozs7Ozs2QkFDS0MsSSxFQUFNO0FBQ2IsYUFBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJwQixNQUFNVSxJQUF2QixFQUE0QjtBQUNqQ1csZUFBTSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsU0FBbkIsR0FBNkIsR0FBN0IsR0FBaUMsRUFBbEMsRUFBc0NDLFFBQXRDLEtBQWlELEdBRHRCO0FBRWpDZCx5QkFBaUIsMkJBQVdlLFFBQVgsQ0FBb0JSLElBQXBCO0FBRmdCLE9BQTVCLENBQVA7QUFJRDs7OzhCQUNTTixPLEVBQVNlLFEsRUFBUztBQUMxQixhQUFRZixZQUFZLElBQWIsR0FBb0JlLFdBQVcsWUFBL0IsR0FBOENBLFFBQXJEO0FBQ0Q7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0k7QUFBQTtBQUFBLFVBQUssT0FBUSxLQUFLTCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJkLE9BQXBCLEdBQThCVCxNQUFNUyxPQUFwQyxHQUE2Q1QsTUFBTUMsR0FBL0QsRUFBb0UsU0FBUztBQUFBLG1CQUFJLE9BQUtxQixLQUFMLENBQVdNLEtBQVgsRUFBSjtBQUFBLFdBQTdFO0FBQ0k7QUFBQTtBQUFBO0FBQU07QUFBQTtBQUFBO0FBQUksaUJBQUtDLFNBQUwsQ0FBZSxLQUFLUCxLQUFMLENBQVdWLE9BQTFCLEVBQW1DLEtBQUtVLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkksUUFBdEQ7QUFBSixXQUFOO0FBQThFO0FBQTlFLFNBREo7QUFFSyxhQUFLTCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFNBRnhCO0FBQUE7QUFFMEM7QUFBQTtBQUFBO0FBQU9NLGVBQUtDLENBQUwsQ0FBTyxjQUFQO0FBQVAsU0FGMUM7QUFBQTtBQUVpRixhQUFLVCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLElBRnBHO0FBQUE7QUFFMEcsa0NBRjFHO0FBR0ksZ0NBQUssT0FBTyxLQUFLYyxRQUFMLENBQWMsS0FBS1YsS0FBTCxDQUFXQyxPQUFYLENBQW1CTCxJQUFqQyxDQUFaO0FBSEosT0FESjtBQVFEOzs7Ozs7a0JBR1lELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgY29sb3JTY2FsZSBmcm9tICdzaW1wbGUtY29sb3Itc2NhbGUnO1xuXG5jb2xvclNjYWxlLnNldENvbmZpZyh7XG4gIG91dHB1dFN0YXJ0OjEsXG4gIG91dHB1dEVuZDoxMDAsXG4gIGlucHV0U3RhcnQ6MCxcbiAgaW5wdXRFbmQ6MzBcbn0pO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgYm94OiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuICAgIHRleHRBYWxpZ246ICdjZW50ZXInLFxuICAgIHRyYW5zaXRpb246ICdoZWlnaHQgMDRzIGVhc2UnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LFxuICBsb2FkaW5nOiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuICAgIHRleHRBYWxpZ246ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBoZWlnaHQ6ICczNHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnaGVpZ2h0IDA0cyBlYXNlJ1xuICB9LFxuICBsaW5lOiB7XG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBoZWlnaHQ6ICc4cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNjY2MnXG4gIH0sXG4gIGdhdGV3YXk6IHtcbiAgICBtYXJnaW5CdXR0b206ICcwcHgnLFxuICAgIG1hcmdpblRvcDogJy05cHgnLFxuICAgIGZvbnRTaXplOiAnMi40cmVtJyxcbiAgICBsaW5lSGVpZ2h0OiAnMS4zNSdcbiAgfVxufTtcblxuXG5jbGFzcyBCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBiYXJTdHlsZShsb3NzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3R5bGUubGluZSx7XG4gICAgICB3aWR0aDoodGhpcy5wcm9wcy5zdGF0aW9uLmJhbmR3aWR0aCoxMDAvMjApLnRvU3RyaW5nKCkrJyUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclNjYWxlLmdldENvbG9yKGxvc3MpXG4gICAgfSk7XG4gIH1cbiAgaXNHYXRld2F5KGdhdGV3YXksIGhvc3RuYW1lKXtcbiAgICByZXR1cm4gKGdhdGV3YXkgPT09IHRydWUpPyBob3N0bmFtZSArICcgKEdhdGV3YXkpJyA6IGhvc3RuYW1lO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXsodGhpcy5wcm9wcy5zdGF0aW9uLmxvYWRpbmcpPyBzdHlsZS5sb2FkaW5nOiBzdHlsZS5ib3h9IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmNsaWNrKCl9ID5cbiAgICAgICAgICAgIDxzcGFuPjxiPnt0aGlzLmlzR2F0ZXdheSh0aGlzLnByb3BzLmdhdGV3YXksIHRoaXMucHJvcHMuc3RhdGlvbi5ob3N0bmFtZSl9PC9iPjxici8+PC9zcGFuPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdGlvbi5iYW5kd2lkdGh9IE1icHMgLyA8c3Bhbj57STE4bi50KCdQYWNrYWdlIGxvc3MnKX08L3NwYW4+IHt0aGlzLnByb3BzLnN0YXRpb24ubG9zc30lPGJyLz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RoaXMuYmFyU3R5bGUodGhpcy5wcm9wcy5zdGF0aW9uLmxvc3MpfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiXX0=