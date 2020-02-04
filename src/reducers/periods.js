const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) 
    {
    case 'ADD_PERIOD':
        return { 
            ...state,
            all: { ...state.all||{}, ...payload.all },
            current: payload.current,
            previous: payload.previous,
        };
    default: return state;
    }
};
