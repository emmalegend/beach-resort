import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import Services from '../components/services';
import {Link} from 'react-router-dom';
import FeaturedRooms from '../components/featuredRooms';

export default function home() {
    return (
        <>
            <Hero>
                <Banner 
                    title="Luxurious Rooms"
                    subtitle="Deluxe rooms starting at $299"
                >
                    <Link to ='/rooms' className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
