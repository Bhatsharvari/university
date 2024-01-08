import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//import Card from './Card';

const VideoSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <div className='video'>
      {/* <Card/> */}
        <u><h2 style={{textAlign:'center'}}> Articles</h2></u>
        <Slider {...settings}>
          <div>
          <iframe width="250px" height="380px" src="https://www.youtube.com/embed/G5_S99vObOA?si=vnu4y0iqZgTcOrWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <iframe width="250px" height="380px" src="https://www.youtube.com/embed/PwUyWafhHng?si=F3b7wupvF8nbgd2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <iframe width="250px" height="380px" src="https://www.youtube.com/embed/mmHscp67ibA?si=vagFPJjDCpaj7rw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <iframe width="250px" height="380px" src="https://www.youtube.com/embed/ZxEBt54cd70?si=mrF9VnNASxXCcOEb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div>
          <iframe width="250px" height="380px" src="https://www.youtube.com/embed/jH-BNR69ggY?si=_--bsOJcR8V1QH5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
         
        </Slider>
    </div>
  )
}

export default VideoSlider