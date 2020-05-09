import { createAction } from 'redux-actions';
import { request } from '../services/request';

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
    const data = await request('meters/current');
    const { devices, current, previous } = data;
    const meters = devices.map((device) => {
        const currentReading = current.meter_readings.find(x => x.type === device.type);
        const previousReading = previous.meter_readings.find(x => x.type === device.type);
        return{
            type: device.type,
            name: device.name,
            currentValue: currentReading.value ? currentReading.value : '',
            previousValue: previousReading.value,
            currentReadingId: currentReading.id,
        };});
    dispatch(addPeriod({ 
        meters,
    }));
};
