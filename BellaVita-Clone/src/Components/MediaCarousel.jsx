import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
export default function MediaCarousel({ items }) {
    const nav = useNavigate()
    return (
        <div className="Carousel">
            <Carousel
                autoPlay={true}
                centerSlidePercentage={20}
                infiniteLoop
                centerMode
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
                {items.map((item) => (
                    <div id="mediaCarousel" onClick={() => window.open(`${item.link}`, '_blank')} key={item.image}>
                        <img src={item.image} alt="" />
                    </div>
                ))}

            </Carousel>
        </div>
    );
}
