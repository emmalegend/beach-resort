import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import RoomsContainer from '../components/roomsContainer';
import {Link} from 'react-router-dom';

export default function () {
    return (
        <>
            <Hero hero="roomsHero"> 
                <Banner title="Our Rooms">
                    <Link to="/"className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}
