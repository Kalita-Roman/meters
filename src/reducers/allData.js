export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) 
    {
    case 'SET_ALL_DATA':
        return [ ...state, ...payload];
    default: return state;
    }
}
