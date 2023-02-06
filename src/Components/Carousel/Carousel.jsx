import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
export default function MyCarousel({ items }) {
    const nav = useNavigate()
    return (
        <div className="Carousel">
            <Carousel
                autoPlay={true}
                centerSlidePercentage={100}
                infiniteLoop
                swipeable
                showArrows={false}
                showStatus={false}
                emulateTouch
                // showIndicators={false}
                thumbWidth={100}
                interval={2000}
                transitionTime={500}
                useKeyboardArrows
                stopOnHover
                showThumbs={false}
            >
                {items.map((item) => (
                    <Box id="carouselLink" onClick={() => nav(`${item.link}`)} key={item.image}>
                        <Image h={['142px', 'auto', 'auto']} src={item.image} alt="" />
                    </Box>
                ))}

            </Carousel>
        </div>
    );
}
