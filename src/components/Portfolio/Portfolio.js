import React from "react";
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "animate.css";
import to_do from "../../Images/to-do_img.avif";

const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <span className='animate__animated animate__jackInTheBox'>Recent Projects</span>
            <span className='animate__animated animate__jackInTheBox animate__delay-1s'>Portfolio</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='p-slider'
            >
                <SwiperSlide className='s-slide'>
                    <a href="https://github.com/kartik3yaS/To-do_list" target="_blank">
                        <img src={to_do} alt="TO-Do_List"/>
                    </a>
                    <span className='s-text'><br />Build a "To Do List" app in react-js, offering task
                        <br />
                        management with responsive design<br /> for a productive user experience.
                        <br/>
                        <strong>Skills :</strong> React Js, Responsive CSS
                    </span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;