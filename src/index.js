import  epics from './metricsEpics';
import { reducer } from './metricsReducer';
import * as selector from './metricsSelectors';
import * as constants from './metricsConstants';
import Metrics from './metricsPage';
import { MetricsMenu } from './metricsMenu';

import i18nEs from '../i18n/translations/es.json';
import i18nEn from '../i18n/translations/en.json';

export default {
  name: 'Metrics',
  page: Metrics,
  menu: MetricsMenu,
  store: {
    name: 'metrics',
    epics,
    reducer,
    selector,
    constants
  },
  translations: Object.assign(
    i18nEn,
    i18nEs
  )
};