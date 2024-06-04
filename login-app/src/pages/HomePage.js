import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <div>
            <h1>Home Page</h1>
            {isAuthenticated ? (
                <p>Welcome!</p>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
};

export default HomePage;
