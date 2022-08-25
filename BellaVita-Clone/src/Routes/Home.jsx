import { Divider } from "@chakra-ui/react";
import MyCarousel from "../Components/Carousel";
import Header from "../Components/Header";
import Headline from "../Components/Headline";
import Luxury from "../Components/Luxury";
import MediaCarousel from "../Components/MediaCarousel";
import Navbar from "../Components/Navbar/Navbar";
import SolutionCarousel from "../Components/solutionCarousel";


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
            <Headline text={"BESTSELLERS"} />
            <Headline text={"FIND SOLUTIONS FOR"} />
            <div id="findSolution">
                <SolutionCarousel />
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
        </div>
    )
}



