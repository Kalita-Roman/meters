export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) 
    {
    case 'SET_ALL_DATA':
        return [ ...state, ...payload];
    case 'SEND_DATA_OF_METER': 
        console.log(payload);
        return [ ...state ];
    default: return state;
    }
}
