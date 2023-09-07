import Image from "next/image";
import background from "../../../public/images/background.jpeg";
import Content from "./components/content";
const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            <Image src={background} alt={"Background"} fill style={{ objectFit: "cover" }} priority />
            <Content />
        </div>
    );
};

export default Hero;
