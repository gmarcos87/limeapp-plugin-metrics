import { h, Component } from 'preact';

import colorScale from 'simple-color-scale';

colorScale.setConfig({
  outputStart:1,
  outputEnd:100,
  inputStart:0,
  inputEnd:30
});

const style = {
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


class Box extends Component {
  barStyle(loss) {
    return Object.assign({},style.line,{
      width:(this.props.station.bandwidth*100/20).toString()+'%',
      backgroundColor: colorScale.getColor(loss)
    });
  }
  render() {
    return (
        <div style={(this.props.station.loading)? style.loading: style.box}>
            <b>{this.props.station.hostname}</b><br/>
            {this.props.station.bandwidth} Mbps / <span>{I18n.t('Package loss')}</span> {this.props.station.loss}%<br/>
            <div style={this.barStyle(this.props.station.loss)}>
            </div>
        </div>
    );
  }
}

export default Box;