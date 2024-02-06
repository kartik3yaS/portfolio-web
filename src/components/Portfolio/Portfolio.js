import React from "react";
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "animate.css";
import to_do from "../../Images/to-do_img.avif";
import blog from "../../Images/blog_img.avif";
import shop from "../../Images/shoplist_img.avif";

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
                    <a href="https://github.com/kartik3yaS/blog-website" target="_blank">
                        <img src={blog} alt="TO-Do_List"/>
                    </a>
                    <span className='s-text'><br />Build a "Blog-Website" allows to add post,
                        <br />
                        edit existing post and delete them in real time.<br /> Data gets saves in json file.
                        <br/>
                        <strong>Skills :</strong> React Js, Responsive CSS, 
                    </span>
                </SwiperSlide>
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
                <SwiperSlide className='s-slide'>
                    <a href="https://github.com/kartik3yaS/Shopping_List1" target="_blank">
                        <img src={shop} alt="Shopping-List"/>
                    </a>
                    <span className='s-text'><br />Build a "Shopping-List" app in react-js, offering
                        <br />
                        to add items you need to buy with deleting it.<br /> for a productive user experience.
                        <br/>
                        <strong>Skills :</strong> React Js, Responsive CSS
                    </span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;