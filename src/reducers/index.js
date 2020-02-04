import { combineReducers } from 'redux';

import session from './session';
import allData from './allData';
import periods from './periods';

export default combineReducers({
    session,
    allData,
    periods,
});