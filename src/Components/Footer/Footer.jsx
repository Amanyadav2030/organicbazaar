import { Button, HStack, Input, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return (
        <HStack p={['20px 10px', '50px 26px', '56px 26px']} id='footer'>
            <HStack align={'start'} id="div1">
                <VStack align={'start'} >
                    <div className='FooterHead'>INFORMATION</div>
                    <Text>Blogs</Text>
                    <Text>Newsroom</Text>
                    <Text>Terms & condition</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Refund and Return</Text>
                    <Text>Shipping Policy</Text>
                </VStack>
                <VStack align={'start'}>
                    <div className='FooterHead'>SUPPORT</div>
                    <Text>About Us</Text>
                    <Text>Contact Us</Text>
                    <Text>Order Tracking</Text>
                    <Text>All Products</Text>
                    <Text>FAQ</Text>
                </VStack>
            </HStack>
            <HStack p={['10px', '13px 15px']} align={'start'} id="div2">
                <VStack align={'start'} >
                    <div className='FooterHead'>CONTACT US</div>
                    <Text>Office Location: Plot no. 417, Udyog Vihar Phase III, Gurgaon,Haryana,India</Text>
                    <Text>shop@organicbazaar.com</Text>
                    <Text>+91 9165148159</Text>
                    <Text>Timing:9:00 Am To 9:00 PM, Monday to Sunday</Text>
                </VStack>
                <VStack align={'start'} display={['none', 'flex', 'flex']} >
                    <div className='FooterHead'>OUR NEWSLETTER</div>
                    <Text>Sign up here to get the latest news, updates and special offers delivered to your inbox.</Text>
                    <Text>Plus, you'll be the first to know about our discounts!</Text>
                    <Input type="text" placeholder="Enter Your Email Address" />
                    <Button>Submit</Button>
                </VStack>
            </HStack>
        </HStack>
    )
}