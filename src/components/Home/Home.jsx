import React, { useContext } from 'react';
import { UserContext } from '../AuthenticationProviders/AuthenticationProviders';

const Home = () => {
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h2>This is home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;