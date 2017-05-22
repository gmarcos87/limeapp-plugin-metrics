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
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'div',
        { style: this.props.station.loading ? style.loading : style.box },
        (0, _preact.h)(
          'b',
          null,
          this.props.station.hostname
        ),
        (0, _preact.h)('br', null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JveC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwiYm94IiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0ZXh0QWFsaWduIiwidHJhbnNpdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibG9hZGluZyIsImxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJCb3giLCJsb3NzIiwiT2JqZWN0IiwiYXNzaWduIiwid2lkdGgiLCJwcm9wcyIsInN0YXRpb24iLCJiYW5kd2lkdGgiLCJ0b1N0cmluZyIsImdldENvbG9yIiwiaG9zdG5hbWUiLCJJMThuIiwidCIsImJhclN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSwyQkFBV0EsU0FBWCxDQUFxQjtBQUNuQkMsZUFBWSxDQURPO0FBRW5CQyxhQUFVLEdBRlM7QUFHbkJDLGNBQVcsQ0FIUTtBQUluQkMsWUFBUztBQUpVLENBQXJCOztBQU9BLElBQU1DLFFBQVE7QUFDWkMsT0FBSztBQUNIQyxZQUFRLEtBREw7QUFFSEMsYUFBUyxNQUZOO0FBR0hDLGdCQUFZLFNBSFQ7QUFJSEMsZ0JBQVksUUFKVDtBQUtIQyxnQkFBWSxpQkFMVDtBQU1IQyxjQUFVLFFBTlA7QUFPSEMsWUFBUTtBQVBMLEdBRE87QUFVWkMsV0FBUztBQUNQUCxZQUFRLEtBREQ7QUFFUEMsYUFBUyxNQUZGO0FBR1BDLGdCQUFZLFNBSEw7QUFJUEMsZ0JBQVksUUFKTDtBQUtQRSxjQUFVLFFBTEg7QUFNUEMsWUFBUSxNQU5EO0FBT1BGLGdCQUFZO0FBUEwsR0FWRztBQW1CWkksUUFBTTtBQUNKUixZQUFRLFFBREo7QUFFSk0sWUFBUSxLQUZKO0FBR0pHLHFCQUFpQjtBQUhiO0FBbkJNLENBQWQ7O0lBMkJNQyxHOzs7Ozs7Ozs7Ozs2QkFDS0MsSSxFQUFNO0FBQ2IsYUFBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJmLE1BQU1VLElBQXZCLEVBQTRCO0FBQ2pDTSxlQUFNLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CQyxTQUFuQixHQUE2QixHQUE3QixHQUFpQyxFQUFsQyxFQUFzQ0MsUUFBdEMsS0FBaUQsR0FEdEI7QUFFakNULHlCQUFpQiwyQkFBV1UsUUFBWCxDQUFvQlIsSUFBcEI7QUFGZ0IsT0FBNUIsQ0FBUDtBQUlEOzs7NkJBQ1E7QUFDUCxhQUNJO0FBQUE7QUFBQSxVQUFLLE9BQVEsS0FBS0ksS0FBTCxDQUFXQyxPQUFYLENBQW1CVCxPQUFwQixHQUE4QlQsTUFBTVMsT0FBcEMsR0FBNkNULE1BQU1DLEdBQS9EO0FBQ0k7QUFBQTtBQUFBO0FBQUksZUFBS2dCLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkk7QUFBdkIsU0FESjtBQUN3QyxrQ0FEeEM7QUFFSyxhQUFLTCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFNBRnhCO0FBQUE7QUFFMEM7QUFBQTtBQUFBO0FBQU9JLGVBQUtDLENBQUwsQ0FBTyxjQUFQO0FBQVAsU0FGMUM7QUFBQTtBQUVpRixhQUFLUCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLElBRnBHO0FBQUE7QUFFMEcsa0NBRjFHO0FBR0ksZ0NBQUssT0FBTyxLQUFLWSxRQUFMLENBQWMsS0FBS1IsS0FBTCxDQUFXQyxPQUFYLENBQW1CTCxJQUFqQyxDQUFaO0FBSEosT0FESjtBQVFEOzs7Ozs7a0JBR1lELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgY29sb3JTY2FsZSBmcm9tICdzaW1wbGUtY29sb3Itc2NhbGUnO1xuXG5jb2xvclNjYWxlLnNldENvbmZpZyh7XG4gIG91dHB1dFN0YXJ0OjEsXG4gIG91dHB1dEVuZDoxMDAsXG4gIGlucHV0U3RhcnQ6MCxcbiAgaW5wdXRFbmQ6MzBcbn0pO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgYm94OiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuICAgIHRleHRBYWxpZ246ICdjZW50ZXInLFxuICAgIHRyYW5zaXRpb246ICdoZWlnaHQgMDRzIGVhc2UnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LFxuICBsb2FkaW5nOiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuICAgIHRleHRBYWxpZ246ICdjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBoZWlnaHQ6ICczNHB4JyxcbiAgICB0cmFuc2l0aW9uOiAnaGVpZ2h0IDA0cyBlYXNlJ1xuICB9LFxuICBsaW5lOiB7XG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBoZWlnaHQ6ICc4cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNjY2MnXG4gIH1cbn07XG5cblxuY2xhc3MgQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgYmFyU3R5bGUobG9zcykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0eWxlLmxpbmUse1xuICAgICAgd2lkdGg6KHRoaXMucHJvcHMuc3RhdGlvbi5iYW5kd2lkdGgqMTAwLzIwKS50b1N0cmluZygpKyclJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JTY2FsZS5nZXRDb2xvcihsb3NzKVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXsodGhpcy5wcm9wcy5zdGF0aW9uLmxvYWRpbmcpPyBzdHlsZS5sb2FkaW5nOiBzdHlsZS5ib3h9PlxuICAgICAgICAgICAgPGI+e3RoaXMucHJvcHMuc3RhdGlvbi5ob3N0bmFtZX08L2I+PGJyLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0YXRpb24uYmFuZHdpZHRofSBNYnBzIC8gPHNwYW4+e0kxOG4udCgnUGFja2FnZSBsb3NzJyl9PC9zcGFuPiB7dGhpcy5wcm9wcy5zdGF0aW9uLmxvc3N9JTxici8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLmJhclN0eWxlKHRoaXMucHJvcHMuc3RhdGlvbi5sb3NzKX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3g7Il19