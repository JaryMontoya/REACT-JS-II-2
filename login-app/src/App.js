import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
            </Routes>
        </div>
    );
};

export default App;
