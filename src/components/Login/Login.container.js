import { connect } from 'react-redux';
import Login from './Login';
import { setSession } from '../../actions/session';
import { request } from '../../services/request';

const selectUser = (state) => state.session.user;

const mapStateToProps = (state) => {
    if(state.session.pending) {
        return { pending: true };
    }
    if (state.session.permissions && state.session.permissions.ok === 'ok') {
        return { ok: true };
    }
    return { ok: false, user: selectUser(state), apiServerUrl: process.env.API_SERVER };
};

const mapDispatchToProps = {
    fetchSession: () => async (dispatch) => {
        dispatch(setSession({ pending: true, user: null }));

        const session = await request('whoami'); 

        const user = session.passport && session.passport.user;

        if(!user) {
            return dispatch(setSession({ pending: false, user: null }));
        }

        const { displayName }  = user;

        dispatch(setSession({ pending: false, user: { displayName, accountId: '1' } }));
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
