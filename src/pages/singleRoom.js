import React, { Component } from 'react';
import defaultBcg from '../images/room-10.jpeg'
import Hero from '../components/hero';
import Banner from '../components/banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';

export default class singleRoom extends Component {
   constructor(props){
       super(props)
       this.state ={
           slug:this.props.match.params.slug,
           defaultBcg
       }
   }
   static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>No such Room could be found..</h3>
                <Link to='/rooms' className="btn-primary">
                    Back to Rooms
                </Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        return (
            <Hero hero="roomsHero">
                <Banner title={`${name} room`}/>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms
                </Link>
            </Hero>
        )
    }
}
