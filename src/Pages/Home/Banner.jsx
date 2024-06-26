import { useState, useEffect } from "react";

import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel  w-full relative">
      <div
        id="slide1"
        className={`carousel-item  relative w-full ${
          currentSlide === 0 ? "" : "hidden"
        }`}
      >
        <img src={img1} className="w-full rounded-xl lg:h-[660px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a
            href="#slide6"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(5);
            }}
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(1);
            }}
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "" : "hidden"
        }`}
      >
        <img src={img2} className="w-full rounded-xl lg:h-[660px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(0);
            }}
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(2);
            }}
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "" : "hidden"
        }`}
      >
        <img src={img3} className="w-full rounded-xl lg:h-[660px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a
            href="#slide2"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(1);
            }}
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(3);
            }}
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "" : "hidden"
        }`}
      >
        <img src={img4} className="w-full rounded-xl lg:h-[660px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a
            href="#slide3"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(2);
            }}
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(4);
            }}
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide5"
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? "" : "hidden"
        }`}
      >
        <img src={img5} className="w-full rounded-xl lg:h-[660px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a
            href="#slide4"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(3);
            }}
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(5);
            }}
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide6"
        className={`carousel-item relative w-full ${
          currentSlide === 5 ? "" : "hidden"
        }`}
      >
        <img src={img6} className="w-full rounded-xl lg:h-[660px]" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
          <a
            href="#slide5"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(4);
            }}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle"
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(0);
            }}
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
