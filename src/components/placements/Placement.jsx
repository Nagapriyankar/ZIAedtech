import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { placementData } from '../../data/placementData'
import {placementImage} from '../../utils/placementImage'
import './placement.css'


    const Placement = () => {
        return (
            <div className="placement">
                <div className="header">
                    <h2>Our Alumni Works at</h2>
                </div>
                <div className="container">
                    <div className="p-scroll">
                        <Marquee
                            gradient={false}
                            speed={80}
                            pauseOnHover={true}
                            pauseOnClick={true}
                            delay={0}
                            play={true}
                            direction="left"
                        >
                            {placementData.map((value, id) => (
                                <div className="place-box" key={id} >
                                    <img src={placementImage(value)} alt={value} />
                                    <h3>
                                        {value}
                                    </h3>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        )
    }


export default Placement