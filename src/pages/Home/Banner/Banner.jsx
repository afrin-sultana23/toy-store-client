import img1 from "../../../assets/images/banner/2.jpg"
import img2 from "../../../assets/images/banner/3.jpg"
import img3 from "../../../assets/images/banner/4.jpg"
import img4 from "../../../assets/images/banner/5.jpg"
import img5 from "../../../assets/images/banner/6.jpg"


const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <div className="carousel object-cover w-full h-[38rem] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="object-cover w-full" />
                    <div className="absolute flex justify-end mt-16 md:top-1/4 left-5   right-5 content-end">
                        <div className="space-y-8 w-3/4 md:space-y-3 text-right p-8">
                            <h1 className="text-6xl font-bold tracking-widest  text-[#28282B] ">LUNA STORE</h1>
                            
                            <p className="text-3xl font-medium text-[#28282B] md:tracking-wide ">World-class action figures and collectibles</p>
                            <div>
                                <button className="btn md:btn-lg btn-outline font-bold text-black tracking-widest">Learn More</button>
                                <button className="ml-4 btn md:btn-lg bg-[#c0ccda] md:text-xl tracking-widest mt-2">Order Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-outline btn-circle">❮</a> 
                        <a href="#slide2" className="ml-4 btn btn-outline btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute top-1/4  left-5 right-5 w-1/2 space-y-6 ">
                       
                            <h1 className="text-4xl tracking-wide p-3 bg-[#c0ccda] text-slate-900 font-semibold  w-3/4">All IN-STOCK Items</h1>
                            <span className="text-xl underline">Up to</span>
                            <span className="text-8xl font-bold text-[#FF0000]">70% off !!!</span>
                           
                            
                            <p className="text-2xl tracking-wide p-3 bg-[#c0ccda] text-slate-900 ">ON OUR ENTIRE IN-STOCK INVENTORY</p>
                           
                        
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-outline btn-circle">❮</a> 
                        <a href="#slide3" className="ml-4 btn btn-outline btn-circle">❯</a>
                    </div>
              
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    <div className="absolute flex justify-end top-2/4 left-5 right-5">
                    <div className="space-y-3 w-2/4  p-8">
                            <h1 className="text-5xl font-bold  p-2  bg-violet-500   text-pink-300">PRE-ORDER NOW</h1>
                            
                            <p className="text-3xl font-semibold text-slate-700 tracking-wider ">Pre-order new and upcoming anime figures !</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-outline btn-circle">❮</a> 
                        <a href="#slide4" className="ml-4 btn btn-outline btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex top-1/4 left-5 right-5">
                        <div className="space-y-4 w-1/2   p-8">
                            <h1 className="text-6xl font-semibold tracking-widest  text-white">Upcoming Gaming Figures!!</h1>
                            
                            <p className="text-3xl font-medium text-white tracking-wider ">world-class action figures <br /> and collectibles</p>
                            <div>
                                <button className="btn btn-outline btn-info font-bold text-white tracking-widest">Learn More</button>
                                <button className="ml-4 btn btn-info tracking-widest">Order Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-outline btn-circle">❮</a> 
                        <a href="#slide5" className="ml-4 btn btn-outline btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex top-1/4 left-5 right-5">
                        <div className="space-y-3 w-2/4  p-8">
                            <h1 className="text-5xl font-bold  p-4  bg-blue-600   text-gray-100">PRE-ORDER NOW</h1>
                            
                            <p className="text-4xl font-bold text-slate-700 tracking-widest ">Pre-order new and upcoming anime figures !</p>
                            <div>
                                <button className="btn btn-outline btn-error font-bold text-white tracking-widest">Learn More</button>
                                <button className="ml-4 btn bg-violet-700 tracking-widest text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-outline btn-circle">❮</a> 
                        <a href="#slide1" className="ml-4 btn btn-outline btn-circle">❯</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;