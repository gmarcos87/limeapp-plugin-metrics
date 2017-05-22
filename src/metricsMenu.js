import { h, Component } from 'preact';

export class MetricsMenu extends Component {
  render() {
    return (<a href={'#/metrics'}>{I18n.t('Metrics')}</a>);
  }
}