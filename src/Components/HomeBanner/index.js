import { Tune } from "@mui/icons-material";
import React from "react";
import Slider from "react-slick";


const HomeBanner=()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return(
            <div className="homeBannerSection">
                <Slider {...settings}>
                    <div className="item">
                        <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg" className="w-100"/>
                    </div>
                    <div className="item">
                        <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" className="w-100"/>
                    </div>
                </Slider>
            </div>
)
}
export default HomeBanner