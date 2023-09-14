import Image from "next/image";
import background from "../../../public/images/background.jpeg";
import Content from "./components/content";
const Hero = () => {
    return (
        <div className="w-full h-screen bg-cover relative overflow-hidden">
            <Image
                src={background}
                alt={"Background"}
                fill
                style={{ objectFit: "cover" }}
                priority
                className="absolute animate-zooming"
            />
            <Content />
        </div>
    );
};

export default Hero;
