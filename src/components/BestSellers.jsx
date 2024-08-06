// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
      
<section className='third-part'>
<div className='d-flex text-center new-arrivals'>
  <h1 className='mt-5'>Best Sellers</h1>
  <p className='red-line mt-3'></p>
   </div>
        <div className='container'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className="cards-slide me-5">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt=""></img>
                        <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                        <b>$520</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" alt=""></img>
                        <p>Samsung CF591 Series Curved 27-Inch FHD</p>
                        <b>$610</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" alt=""></img>
                        <p>Blue Yeti USB Microphone Blackout</p>
                        <b>$120</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" alt=""></img>
                        <p>DYMO LabelWriter 450 Turbo Thermal</p>
                        <b>$410</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_5.png" alt=""></img>
                        <p>Pryma Headphones, Rose Gold & Grey</p>
                        <b>$180</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_6.png" alt=""></img>
                        <p>Pryma Headphones, Rose Gold & Grey</p>
                        <b>$610</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_7.png" alt=""></img>
                        <p>Fujifilm X100T 16 MP Digital Camera</p>
                        <b>$520</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_8.png" alt=""></img>
                        <p>Samsung CF591 Series Curved 27-Inch</p>
                        <b>$610</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_9.png" alt=""></img>
                        <p>Blue Yeti USB Microphone Blackout</p>
                        <b>$120</b>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cards-slide">
                        <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" alt=""></img>
                        <p>Pryma Headphones, Rose Gold & Grey</p>
                        <b>$410</b>
                    </div>
                </SwiperSlide>
                <div className='mt-5'></div>
            </Swiper></div>
 </section>
    );
};