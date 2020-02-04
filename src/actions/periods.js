export const addPeriod = (payload) => ({
    type: 'ADD_PERIOD',
    payload,
});

export const setCurrentPeriod = (payload) => ({
    type: 'SET_CURRENT_PERIOD',
    payload,
});

export const setPreviousPeriod = (payload) => ({
    type: 'SET_PREVIOUS_PERIOD',
    payload,
});
