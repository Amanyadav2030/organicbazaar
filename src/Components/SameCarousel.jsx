import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";
export default function SameCarousel({ items }) {
    const nav = useNavigate()

    return (
        <div className="Carousel">
            <Carousel
                autoPlay={true}
                centerSlidePercentage={30}
                centerMode
                infiniteLoop
                swipeable
                showArrows={false}
                showStatus={false}
                emulateTouch
                thumbWidth={100}
                interval={2200}
                transitionTime={600}
                useKeyboardArrows
                stopOnHover
                showThumbs={false}
            >
                {items?.map((item) => (
                    <div key={item.image}>
                        <img src={item.image} alt="" />
                    </div>
                ))}
                {/* <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Tan_Removal_Medium_1_480x.jpg?v=1659102685" alt="" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Brightening_Medium_1_480x.jpg?v=1659102685" alt="" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dry___Dull_Lips_Medium_cf9c66a7-0dab-412c-825a-0386c49494ff_480x.jpg?v=1659102685" alt="" />
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dark_Circles_Medium_1_480x.jpg?v=1659102774" alt="" />

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pimples-Acne_Medium_dafd662e-0a24-4ad8-9ee4-67df76fa35bf_480x.jpg?v=1659102685" alt="" />

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair-Loss-_-Thinning-V1_Medium_e3d45b13-d781-4786-a456-5efa31adb360_480x.jpg?v=1659102685" alt="" />

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Oil-Control-v1_Medium_932ba19f-8f57-417a-9606-4dd53c3bd457_480x.jpg?v=1659102685" alt="" />

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pigmentation-v1_Medium_f0a099e8-174b-4576-b81f-c943b875e9eb_480x.jpg?v=1659102685" alt="" />

                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dandruff_Medium_1_480x.jpg?v=1659102844" alt="" />

                </div> */}



            </Carousel>
        </div>
    );
}

