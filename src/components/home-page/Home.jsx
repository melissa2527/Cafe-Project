import React from 'react';
import {HomeCards} from './coffee/HomeCards.jsx';
import Background from './header/Background.jsx';
import {Motto} from './motto/Motto.jsx';

const Home = () => {
    return (
        <>
            <Background />
            <HomeCards />
            <Motto />
        </>
    )
}

export default Home
