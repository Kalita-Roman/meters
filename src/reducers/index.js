import { combineReducers } from 'redux';

import session from './session';
import period from './period';

export default combineReducers({
    session,
    period,
});