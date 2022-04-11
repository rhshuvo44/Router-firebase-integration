import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <p>Current user is : {user ? user.displayName : 'no user'}</p>
        </div>
    );
};

export default Home;