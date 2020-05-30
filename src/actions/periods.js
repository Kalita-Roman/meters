import { createAction } from 'redux-actions';
import request from '../services/request';
import { findByType } from './utils';

export const addPeriod = createAction('ADD_PERIOD');

export const setCurrentPeriod = (payload) => ({
    type: 'SET_CURRENT_PERIOD',
    payload,
});

export const setPreviousPeriod = (payload) => ({
    type: 'SET_PREVIOUS_PERIOD',
    payload,
});

export const loadCurrentPeriod = () => async (dispatch) => {
    const data = await request.get('meters/current');
    const { devices, current, previous } = data;
    const meters = devices
        .map((device) => {
            const currentReading = current.meter_readings.find(findByType(device.type));
            const previousReading = previous.meter_readings.find(findByType(device.type));
            return{
                type: device.type,
                name: device.name,
                currentValue: currentReading.value ? currentReading.value : '',
                previousValue: previousReading.value,
                currentReadingId: currentReading.id,
            };})
        .reduce((acc, meter, index) => {
            acc[meter.type] = meter;
            acc[meter.type].order = index + 1;
            return acc;
        }, {});;
    dispatch(addPeriod({ 
        meters,
    }));
};
    
const setSavingPending = createAction('PERIOD/SET_SAVING_PENDING');

export const saveReading = (payload) => async (dispatch) => {
    console.log(payload);
    const body = { records: [payload] };
    const resp = await request.put('meters/setvalues', { body });
    console.log(resp);
    dispatch(setSavingPending(payload));
};
