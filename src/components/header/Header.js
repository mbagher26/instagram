import React from "react";
import Slider from "react-slick";

import { Avatar } from '@mui/material';
import './Header.css'

function Header({data ,width, height}) {

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
                    <Avatar className="avatar" sx={{width:{width}, height:{height}}}  alt={story.title} src={story.img} />
                    <p className="title-slider">{story.title}</p>
                </div>
            )}

        </Slider>
    );

}

export default Header;