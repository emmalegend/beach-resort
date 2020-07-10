import React from 'react'
import RoomsFilter from './roomsFilter';
import RoomsList from './roomsList';
import {withRoomConsumer} from '../context';
import Loading from './loading';


function RoomsContainer ({context}) {
    const {loading,sortedRooms,rooms} = context;
    if(loading){
      return  <Loading />
    } 
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}


 export default  withRoomConsumer(RoomsContainer) 