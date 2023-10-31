
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import image1 from '../../Assets/1image.png';
import image2 from '../../Assets/2image.png';
import image3 from '../../Assets/3image.png';
import image4 from '../../Assets/4image.png';
import image5 from '../../Assets/5image.png';
import image6 from '../../Assets/6image.png';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const Carousel =() =>{
    return (
        <>
          <Swiper
            effect={'flip'}
            grabCursor={true}
            navigation={true}
            pagination={true}
            loop ={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image1} alt='img-exp' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2}  alt='img-exp'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3}  alt='img-exp'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4}  alt='img-exp'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image5}  alt='img-exp'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image6}  alt='img-exp'/>
            </SwiperSlide>
            
          </Swiper>
        </>
      );

}

export default Carousel;