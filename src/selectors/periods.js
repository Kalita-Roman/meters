export const selectCurrnetPeriod = (state) => 
    state.period 
    && state.period.meters
    && ({
        meters: Object.values(state.period.meters)
    });