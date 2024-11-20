import Image from "next/image";
import carouselImage from '@/app/assets/images/home/carousel-one.png';
import insideCarouselImage from '@/app/assets/images/home/insideCarousel.png';

export default function Carousel() {
    return (
        <section className="relative h-[100vh] ">
            <Image
                src={carouselImage}
                alt="Carousel image"
                fill
                className=""
            />
            <div className="absolute top-[18vh] right-[10vw] w-[33%]  h-[60%] " >
            <Image
                src={insideCarouselImage}
                alt="Carousel image"
                width={600}
                height={600}
                quality={100}
                className="w-full h-full  "
            />
            </div>
        </section>
    );
}
