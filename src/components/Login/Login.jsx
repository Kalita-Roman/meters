import React, { useEffect } from 'react';
import Loader from '../Loader';
import './Login.scss';

export default ({ fetchSession, pending, user, apiServerUrl }) => {
    useEffect(() => {
        fetchSession();
    }, []);
    
    if(pending) {
        return <Loader/>;
    }

    return <div className="login">
        {
            (!pending && Boolean(user)) || <div>
                <p>
                    <a href={apiServerUrl+'google/login'}>login</a>
                </p>
            </div>
        }
        {
            user && <div className="auth-logout">
                <p>{`${user.displayName}`}</p>
                <p>
                    <a href={apiServerUrl+'google/logout'}>logout</a>
                </p>
            </div>
        }
    </div>;
};
