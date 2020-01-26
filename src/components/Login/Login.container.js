import { connect } from 'react-redux';
import Login from './Login';

const selectUser = (state) => state.session.user;

const mapStateToProps = (state) => {
    if(state.session.pending) {
        return { pending: true };
    }
    if (state.session.permissions && state.session.permissions.ok === 'ok') {
        console.log('!');
        return { ok: true };
    }
    return { ok: false, user: selectUser(state), apiServerUrl: process.env.API_SERVER };
};

const mapDispatchToProps = {
    fetchSession: () => async (dispatch) => {
        dispatch({
            type: 'FETCH_SESSION',
            payload: { pending: true, user: null }
        });

        const response = await fetch(process.env.API_SERVER+'whoami', { credentials: 'include' });
        const session = await response.json();

        const user = session.passport && session.passport.user;

        if(!user) {
            return dispatch({
                type: 'FETCH_SESSION',
                payload: { pending: false, user: null }
            });
        }

        const { displayName }  = user;

        dispatch({
            type: 'FETCH_SESSION',
            payload: { pending: false, user: { displayName } }
        });
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
