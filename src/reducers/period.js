const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) 
    {
    case 'ADD_PERIOD':
        console.log('>>> payload', payload);
        return { 
            ...state,
            ...payload
        };
    default: return state;
    }
};
