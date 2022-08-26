import { Divider } from "@chakra-ui/react";
import MyCarousel from "../Components/Carousel";
import Header from "../Components/Header";
import Headline from "../Components/Headline";
import Luxury from "../Components/Luxury";
import MediaCarousel from "../Components/MediaCarousel";
import Navbar from "../Components/Navbar/Navbar";
import SameCarousel from "../Components/SameCarousel";
import Download from "../Components/Download";
import Footer from "../Components/Footer";

const banner = [
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_4bbe001a-978e-491b-a1a4-1fff50c9d9b9_1900x.jpg?v=1660116668',
        link: '/'
    },

    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_X_Bevzilla_desktop_1900x.jpg?v=1659342303',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hydra_Website_banner_1200x399_4f0cfee4-00b0-42bd-9ac5-55d8a235e0ad_1900x.png?v=1658296941',
        link: '/'
    },

]
const media = [
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/ANI_1_480x.jpg?v=1660127230',
        link: 'https://www.aninews.in/news/business/business/bella-vita-organic-confers-most-trusted-brand-for-natural-and-ayurvedic-products-at-golden-glory-awards-202120211227115036/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Elle-V1_480x.png?v=1660127235',
        link: 'https://elle.in/are-deodorants-and-antiperspirants-bad-for-you/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hindustan-Times-V1_1_480x.jpg?v=1660127269',
        link: 'https://www.hindustantimes.com/shop-now/health-and-beauty/face-serum-for-glow-fights-ageing-signs-sun-damage-to-give-dewy-glow-101659096541039.html'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/iDiva_480x.jpg?v=1660125648',
        link: 'https://www.idiva.com/beauty/hair/how-to-get-thicker-and-healthier-eyebrows-naturally/18032752'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Lifestyle-Asia_1_480x.jpg?v=1660127274',
        link: 'https://www.lifestyleasia.com/ind/beauty-grooming/skincare/lip-scrub-for-dark-lips-for-a-picture-perfect-pout/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Mint_480x.jpg?v=1660125696',
        link: 'https://www.livemint.com/companies/start-ups/d2c-brand-bella-vita-organic-raises-10-mn-in-series-a-funding-11626776090765.html'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/PinkVilla_480x.jpg?v=1660125706',
        link: 'https://www.pinkvilla.com/fashion/beauty/face-wash-for-pimples-1041189'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/POPXO_c5c98406-db49-4627-aedb-38a9c9c87511_480x.jpg?v=1660125726',
        link: 'https://www.popxo.com/article/best-face-pack-for-oily-skin/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Swirlster-NDTV_480x.jpg?v=1660125743',
        link: 'https://swirlster.ndtv.com/beauty/amazon-prime-day-2022-these-bestselling-deals-on-makeup-essentials-are-at-minimum-30-off-3185729'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Your-Story_480x.jpg?v=1660127274',
        link: 'https://yourstory.com/2021/04/bella-vita-organics-d2c-natural-skincare-brand/amp'
    },
]
const solutionCarousel = [
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Tan_Removal_Medium_1_480x.jpg?v=1659102685',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Brightening_Medium_1_480x.jpg?v=1659102685',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dry___Dull_Lips_Medium_cf9c66a7-0dab-412c-825a-0386c49494ff_480x.jpg?v=1659102685',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dark_Circles_Medium_1_480x.jpg?v=1659102774',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pimples-Acne_Medium_dafd662e-0a24-4ad8-9ee4-67df76fa35bf_480x.jpg?v=1659102685',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair-Loss-_-Thinning-V1_Medium_e3d45b13-d781-4786-a456-5efa31adb360_480x.jpg?v=1659102685',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pigmentation-v1_Medium_f0a099e8-174b-4576-b81f-c943b875e9eb_480x.jpg?v=1659102685',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dandruff_Medium_1_480x.jpg?v=1659102844',
        link: ''
    },
]
const spotLight = [
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Care_V1_Medium_717c8f68-9b82-4c7c-9ff2-0e886f52103d_480x.jpg?v=1659102928',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_V2_Medium_860c536d-b4a1-4a37-b3f3-4d1c4e1f004d_480x.jpg?v=1659102928',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_V1.1_Medium_a2d75bd0-3b18-4c34-92cf-04d4c74e2bcb_480x.jpg?v=1659102927',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Summer_Essentials_V1_Medium_10dbdd6d-898e-4ea4-8d21-d6bfe4a70bc6_480x.jpg?v=1659102927',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Sensitive_Skin_V1_Medium_e87ef676-5616-4d72-b498-92e1808e3552_480x.jpg?v=1659102928',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Hydration_V1_Medium_bf8933f3-4b75-400b-a933-8adc21291912_480x.jpg?v=1659102928',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Detan___Exfoliation_V1_Medium_e5175d97-bd53-467d-8461-9454d3153379_480x.jpg?v=1659102928',
        link: '/'
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Nourishment_V1_Medium_b8a624dd-42d3-422c-9ab2-cd97c1863f97_480x.jpg?v=1659102927',
        link: '/'
    },
]

export default function Home() {
    return (
        <div id="Main">
            <Header />
            <Navbar />
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <div id="banner">
                <MyCarousel items={banner} />
            </div>
            <div id="giftbox" >
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Untitled_design_desktop_1900x.png?v=1659612770" alt="giftbox" />
            </div>
            <Headline text={"IN THE SPOTLIGHT"} />
            <div id="SpotLight">
                <SameCarousel items={spotLight} />
            </div>
            <Headline text={"FIND SOLUTIONS FOR"} />
            <div id="findSolution">
                <SameCarousel items={solutionCarousel} />
            </div>
            <Headline text={"LUXURY FRAGRANCES"} />
            <Luxury />
            <div id="trust">
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brand-Comms-banner-V2_1900x.jpg?v=1660051394" alt="" />
            </div>
            <Headline text={"MEDIA COVERAGE"} />
            <div id="media">
                <MediaCarousel items={media} />
            </div>
            <div id="bellaCash">
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bella-Cash-Section-Desktop-v1_1900x.jpg?v=1660051412" alt="" />
            </div>
            <div id="download">
                <Download />
            </div>
            <Footer />
        </div>
    )
}



