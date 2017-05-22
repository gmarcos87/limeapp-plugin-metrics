import { h, Component } from 'preact';

import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

import { getMetrics } from './metricsActions';

import Loading from './components/loading';
import Box from './components/box';

import colorScale from 'simple-color-scale';

colorScale.setConfig({
  outputStart:1,
  outputEnd:100,
  inputStart:0,
  inputEnd:30
});

const style = {
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

class Metrics extends Component {
  componentWillMount() {
    this.props.getMetrics();
  }
  showButton(loading) {
    if (!loading) {
      return (
        <button class="button green block" type="submit" onClick={this.props.getMetrics}>
          {I18n.t('Get metrics')}
        </button>
      );
    }
    return (
      <div>
      </div>
    );
  }

  showLoading(loading) {
    if (!loading) {
      return;
    }
    return (
      <div style={{paddingTop:'50px'}}>
        <Loading></Loading>
        <span style={style.textLoading}>{I18n.translateWithoutI18nline(this.props.metrics.status)}</span>
      </div>
    );
  }

  showError(error){
    if (error !== null) {
      return (<p style={style.textError}>Error: {error.msg}</p>);
    }
    return;
  }

  isGateway(hostname, gateway) {
    return (hostname === gateway)? (
      <span><img src=""/></span>
    ) : (false);
  }
  
  render() {
    return (
      <div class="container" style={{paddingTop:'50px', textAlign:'center'}}>
        {this.showLoading(this.props.metrics.loading)}<br />
        {this.props.metrics.error.map(x => this.showError(x))}
          {this.props.metrics.metrics.map(station => (
            <Box station={station} />
            ))}
        {this.showButton(this.props.metrics.loading)}<br />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    metrics: state.metrics
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMetrics: bindActionCreators(getMetrics,dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Metrics);
