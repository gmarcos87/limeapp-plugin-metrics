import {
  LOAD_METRICS
} from './metricsConstants';

export const getMetrics = ( ) => (dispatch) => {
  dispatch({
    type: LOAD_METRICS
  });
};