import { createAction } from 'redux-actions';
import { requestPost } from '../services/request';

export const setAllData = createAction('SET_ALL_DATA');

export const sendDataOfMeter = createAction('SEND_DATA_OF_METER');

export const sendData = ({ type, value }) => async (dispatch, getState) => {
    const state = getState();
    const body = {
        period: state.periods.current,
        value,
        type,
    };
    await requestPost('meters/setvalue', { body });
};
