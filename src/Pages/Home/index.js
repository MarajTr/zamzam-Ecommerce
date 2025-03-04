import Button from '@mui/material/Button';
import HomeBanner from "../../Components/HomeBanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';
const  Home= ()=>{
    var productSliderOptions = {
       dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return(
    <>
     
     <HomeBanner/>

     <section className="homeProducts">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="banner">
                    <img src='https://api.ecommerce.esquireelectronicsltd.com/api/upload/images/ac-2-5efb.webp?resolution=771_1365' className="cursor w-100"/>
                    </div>
                </div>
                <div className="col-md-9 productRow">
                    <div className="d-flex align-items-center ">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">BEST SELLER</h3>
                            <p className="text-light text-sml mb-0">Do not miss this offers</p>
                        </div>
                        <Button className='viewAllBtn ml-auto'>view All
                        <IoIosArrowRoundForward/></Button>
                    </div>



                    <div className='product_row w-100 mt-4'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[ Navigation]}
                        className="mySwiper"
                    >
                    <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                          <img src='https://ftp.ecommerce.esquireelectronicsltd.com/api/upload/images/slide22270-1417.JPG' className="w-100 "/>
                        </div>
                        <div className='info'>
                        <h4>Testing the silde with product dicreption</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5}/>
                        </div>
                           

                     </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                        <img src='https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg' className="w-100"/>
                        </div>
                     </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                        <img src='https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg' className="w-100"/>
                        </div>
                     </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                        <img src='https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg' className="w-100"/>
                        </div>
                     </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                        <img src='https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg' className="w-100"/>
                        </div>
                     </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                        <img src='https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg' className="w-100"/>
                        </div>
                     </div>
                    </SwiperSlide>
                     
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>

     </section>
 
    </>
    )
}
export default Home;