import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Session from '../pages/Session';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/:idtSession" element={<Session />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
