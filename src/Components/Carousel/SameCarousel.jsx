import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
export default function SameCarousel({ items }) {
    const nav = useNavigate();
    const [size,setSize] = useState(false);
    document.querySelector('body').onresize=()=>{
        if(window.innerWidth<=600){
            setSize(true);
        }else{
            setSize(false);
        }
    }
    useEffect(()=>{
        if(window.innerWidth<=600){
            setSize(true);
        }else{
            setSize(false);
        }
    },[])
    return (
        <div className="Carousel">
            <Carousel
                autoPlay={true}
                centerSlidePercentage={size?60:30}
                centerMode
                infiniteLoop
                swipeable
                showArrows={false}
                showStatus={false}
                emulateTouch
                thumbWidth={100}
                interval={2000}
                transitionTime={500}
                useKeyboardArrows
                stopOnHover
                showThumbs={false}
            >
                {items?.map((item) => (
                    <div key={item.image}>
                        <Image src={item.image} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

