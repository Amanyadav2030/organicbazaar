import { Divider } from "@chakra-ui/react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
    return (
        <div id="Main">
            <Header />
            <Navbar />
            <Divider orientation='horizontal' />
        </div>
    )
}