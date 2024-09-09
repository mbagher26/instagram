import React from "react";
import Slider from "react-slick";
import data from '../../data/Story'
import { Avatar } from '@mui/material';
import './Header.css'

function Header() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>

            {data && data.map(story =>
                <div key={story.id}>
                    <Avatar className="avatar" sx={{width: '75', height: '75'}} alt={story.title} src={story.img} />
                    <p className="title-slider">{story.title}</p>
                </div>
            )}

        </Slider>
    );

}

export default Header;