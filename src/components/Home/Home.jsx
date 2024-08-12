import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const value = useContext(AuthContext)
    return (
        <div>
           <h2 className='text-2xl text-center'>My Name is: <span className='font-bold'>{value.name}</span></h2>
        </div>
    );
};

export default Home;