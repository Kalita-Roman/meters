const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;
    console.log('>>> payload', payload);
    switch (type) 
    {
    case 'ADD_PERIOD':
        const { meters } = payload;
        return { 
            ...state,
            meters,
        };
    case 'PERIOD/SET_SAVING_PENDING': 
        //const { meters } = state;
        //const meter = meters.find(x => x.type === payload.meterType);
        
        return {
            ...state,
        };
    default: return state;
    }
};
