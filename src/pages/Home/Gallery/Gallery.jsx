import img1 from "../../../assets/images/gallery/a.jpg"
import img2 from "../../../assets/images/gallery/e.jpg"
import img3 from "../../../assets/images/gallery/w.jpg"
import img4 from "../../../assets/images/gallery/m.png"
import img5 from "../../../assets/images/gallery/g2.jpg"
import img6 from "../../../assets/images/gallery/h.jpg"
import img7 from "../../../assets/images/gallery/shiro.jpg"
import img8 from "../../../assets/images/gallery/b.jpg"
import img9 from "../../../assets/images/gallery/i.jpg"


const Gallery = () => {
    return (
        <div>

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <p className="text-3xl font-semibold text-center text-[#28282B] py-7 tracking-widest">Our Product Gallery</p>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img1} />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img2} />
                </div>
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img3} />
                </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block  w-full rounded-lg object-cover"
                    src={img7} />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img4} />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                    <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={img9} />
                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Gallery;