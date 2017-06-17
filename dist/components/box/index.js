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
      var _this2 = this;

      return (0, _preact.h)(
        'div',
        { style: this.props.station.loading ? style.loading : style.box, onClick: function onClick() {
            return _this2.props.click();
          } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JveC9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZXRDb25maWciLCJvdXRwdXRTdGFydCIsIm91dHB1dEVuZCIsImlucHV0U3RhcnQiLCJpbnB1dEVuZCIsInN0eWxlIiwiYm94IiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJ0ZXh0QWFsaWduIiwidHJhbnNpdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibG9hZGluZyIsImxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJCb3giLCJsb3NzIiwiT2JqZWN0IiwiYXNzaWduIiwid2lkdGgiLCJwcm9wcyIsInN0YXRpb24iLCJiYW5kd2lkdGgiLCJ0b1N0cmluZyIsImdldENvbG9yIiwiY2xpY2siLCJob3N0bmFtZSIsIkkxOG4iLCJ0IiwiYmFyU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBLDJCQUFXQSxTQUFYLENBQXFCO0FBQ25CQyxlQUFZLENBRE87QUFFbkJDLGFBQVUsR0FGUztBQUduQkMsY0FBVyxDQUhRO0FBSW5CQyxZQUFTO0FBSlUsQ0FBckI7O0FBT0EsSUFBTUMsUUFBUTtBQUNaQyxPQUFLO0FBQ0hDLFlBQVEsS0FETDtBQUVIQyxhQUFTLE1BRk47QUFHSEMsZ0JBQVksU0FIVDtBQUlIQyxnQkFBWSxRQUpUO0FBS0hDLGdCQUFZLGlCQUxUO0FBTUhDLGNBQVUsUUFOUDtBQU9IQyxZQUFRO0FBUEwsR0FETztBQVVaQyxXQUFTO0FBQ1BQLFlBQVEsS0FERDtBQUVQQyxhQUFTLE1BRkY7QUFHUEMsZ0JBQVksU0FITDtBQUlQQyxnQkFBWSxRQUpMO0FBS1BFLGNBQVUsUUFMSDtBQU1QQyxZQUFRLE1BTkQ7QUFPUEYsZ0JBQVk7QUFQTCxHQVZHO0FBbUJaSSxRQUFNO0FBQ0pSLFlBQVEsUUFESjtBQUVKTSxZQUFRLEtBRko7QUFHSkcscUJBQWlCO0FBSGI7QUFuQk0sQ0FBZDs7SUEyQk1DLEc7Ozs7Ozs7Ozs7OzZCQUNLQyxJLEVBQU07QUFDYixhQUFPQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFpQmYsTUFBTVUsSUFBdkIsRUFBNEI7QUFDakNNLGVBQU0sQ0FBQyxLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFNBQW5CLEdBQTZCLEdBQTdCLEdBQWlDLEVBQWxDLEVBQXNDQyxRQUF0QyxLQUFpRCxHQUR0QjtBQUVqQ1QseUJBQWlCLDJCQUFXVSxRQUFYLENBQW9CUixJQUFwQjtBQUZnQixPQUE1QixDQUFQO0FBSUQ7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0k7QUFBQTtBQUFBLFVBQUssT0FBUSxLQUFLSSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJULE9BQXBCLEdBQThCVCxNQUFNUyxPQUFwQyxHQUE2Q1QsTUFBTUMsR0FBL0QsRUFBb0UsU0FBUztBQUFBLG1CQUFJLE9BQUtnQixLQUFMLENBQVdLLEtBQVgsRUFBSjtBQUFBLFdBQTdFO0FBQ0k7QUFBQTtBQUFBO0FBQUksZUFBS0wsS0FBTCxDQUFXQyxPQUFYLENBQW1CSztBQUF2QixTQURKO0FBQ3dDLGtDQUR4QztBQUVLLGFBQUtOLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsU0FGeEI7QUFBQTtBQUUwQztBQUFBO0FBQUE7QUFBT0ssZUFBS0MsQ0FBTCxDQUFPLGNBQVA7QUFBUCxTQUYxQztBQUFBO0FBRWlGLGFBQUtSLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkwsSUFGcEc7QUFBQTtBQUUwRyxrQ0FGMUc7QUFHSSxnQ0FBSyxPQUFPLEtBQUthLFFBQUwsQ0FBYyxLQUFLVCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLElBQWpDLENBQVo7QUFISixPQURKO0FBUUQ7Ozs7OztrQkFHWUQsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbmltcG9ydCBjb2xvclNjYWxlIGZyb20gJ3NpbXBsZS1jb2xvci1zY2FsZSc7XG5cbmNvbG9yU2NhbGUuc2V0Q29uZmlnKHtcbiAgb3V0cHV0U3RhcnQ6MSxcbiAgb3V0cHV0RW5kOjEwMCxcbiAgaW5wdXRTdGFydDowLFxuICBpbnB1dEVuZDozMFxufSk7XG5cbmNvbnN0IHN0eWxlID0ge1xuICBib3g6IHtcbiAgICBtYXJnaW46ICczcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXG4gICAgdGV4dEFhbGlnbjogJ2NlbnRlcicsXG4gICAgdHJhbnNpdGlvbjogJ2hlaWdodCAwNHMgZWFzZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogJ2F1dG8nXG4gIH0sXG4gIGxvYWRpbmc6IHtcbiAgICBtYXJnaW46ICczcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXG4gICAgdGV4dEFhbGlnbjogJ2NlbnRlcicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogJzM0cHgnLFxuICAgIHRyYW5zaXRpb246ICdoZWlnaHQgMDRzIGVhc2UnXG4gIH0sXG4gIGxpbmU6IHtcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIGhlaWdodDogJzhweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2NjYydcbiAgfVxufTtcblxuXG5jbGFzcyBCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBiYXJTdHlsZShsb3NzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sc3R5bGUubGluZSx7XG4gICAgICB3aWR0aDoodGhpcy5wcm9wcy5zdGF0aW9uLmJhbmR3aWR0aCoxMDAvMjApLnRvU3RyaW5nKCkrJyUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclNjYWxlLmdldENvbG9yKGxvc3MpXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9eyh0aGlzLnByb3BzLnN0YXRpb24ubG9hZGluZyk/IHN0eWxlLmxvYWRpbmc6IHN0eWxlLmJveH0gb25DbGljaz17KCk9PnRoaXMucHJvcHMuY2xpY2soKX0gPlxuICAgICAgICAgICAgPGI+e3RoaXMucHJvcHMuc3RhdGlvbi5ob3N0bmFtZX08L2I+PGJyLz5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0YXRpb24uYmFuZHdpZHRofSBNYnBzIC8gPHNwYW4+e0kxOG4udCgnUGFja2FnZSBsb3NzJyl9PC9zcGFuPiB7dGhpcy5wcm9wcy5zdGF0aW9uLmxvc3N9JTxici8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aGlzLmJhclN0eWxlKHRoaXMucHJvcHMuc3RhdGlvbi5sb3NzKX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3g7Il19