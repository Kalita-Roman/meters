import React, { useEffect } from 'react';
import Loader from '../Loader';

export default ({ fetchSession, pending, user, apiServerUrl }) => {
    useEffect(() => {
        fetchSession();
    }, []);
    return <div className="login">
        {pending && <div>
            <Loader/>
        </div>}
        {
            Boolean(user) || <div>
                <p>
                    <a href={apiServerUrl+'google/login'}>login</a>
                </p>
            </div>
        }
        {
            user && <div>
                <p>{`Пользователь: ${user.displayName}`}</p>
                <p>
                    <a href={apiServerUrl+'google/logout'}>logout</a>
                </p>
            </div>
        }
    </div>;
};
