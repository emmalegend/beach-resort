import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/title';

//get all unique values
const getUnique = (items, value) =>{
    return [...new Set(items.map(item =>item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize
    } = context;

    //get unique types
    let types = getUnique(rooms, 'type');
    // add all
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index) =>{
    return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
    return <option key={index}value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
           <Title title="searchrooms" />
           <form action="" className="filter-form">
           {/*Start select type */}    
           <div className="form-group">
                <label htmlFor="type">room type</label>
                <select 
                    name="type" 
                    id="type" 
                    value={type} 
                    className="form-control" onChange={handleChange}
                >
                  {types}
                </select>
            </div>
            {/*Start select type */}
            {/*Guests */}
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select 
                    name="capacity" 
                    id="capacity" 
                    value={capacity} 
                    className="form-control" onChange={handleChange}
                >
                  {people}
                </select>
            </div>
            {/*Guests*/}
            {/*Rooms price */}
            <div className="form-group">
                <label htmlFor="price" className="price">Room Price ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
            </div>
            {/* end ofRooms price */}
            {/*Size */}
            <div className="form-group">
                <label htmlFor="size">Room Size</label>
                <div className="size-inputs">
                     <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                    
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                </div>
            </div>
            {/*end ofSize */}
           </form>
        </section>
    )
}
