import React, { Component } from 'react';
import defaultBcg from '../images/room-10.jpeg'
import StyledHero from '../components/styledHero';
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

        const [mainImg,...defaultImg] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}hero="roomsHero">
                    <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to Rooms
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                           return <img key ={index}src={item} alt={item}/>
                        })}

                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price : ${price}</h6>
                            <h6>Size : ${size} SQFT</h6>
                            <h6>
                                Max capacity : {
                                    capacity > 1 ?`${capacity} people` :`${capacity} person`
                                }
                            </h6>
                            <h6>{pets?"pets allowed":"No pets allowed"}</h6>
                            <h6>{breakfast && "Free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key ={index} >
                                -{item}
                            </li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
