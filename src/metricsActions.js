import { push } from 'preact-router-redux';

import {
  LOAD_METRICS
} from './metricsConstants';

export const getMetrics = ( ) => (dispatch) => {
  dispatch({
    type: LOAD_METRICS
  });
};

export const changeNode = (hostname) => (dispatch) => {
  dispatch(push('changeNode/'+hostname));
};