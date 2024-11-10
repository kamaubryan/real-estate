import React from "react";
import CountUp from "react-countup";

function Hero() {
  return (
    <>
      <section className="hero-wrapper innerWidth text-white relative pb-4 bg-black">
        <div className="paddings w-[100%] flex items-center gap-y-[2rem] justify-center flex-wrap">
          <div className="flex flex-col justify-center items-start gap-[3rem] hero-left">
            <div className=" relative z-[1] hero-title">
                <div className="orange-circle h-[4rem] w-[4rem] bg-orange rounded-[999px] absolute"></div>
              <h1 className="font-[600] text-[3.8rem]
              line-height-[4rem] text-san">
                Discover <br />
                Most Suitable <br />
                Property
              </h1>
            </div>
            <div className="hero-des flex flex-col justify-center items-start">
              <span>Find a variety that suit you very easily</span>
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="w-[100%] items-center search-bar bg-white rounded-[5px] border-border py-2 px-4 flex justify-between">
                <img src="/maps-svgrepo-com (1).svg " className="w-[25px] h-[25px]" alt="" />
                <input type="text" className="bg-white border-none outline-none]" />

            <button className="button bg-blue">Search</button>
            </div>
            <div className="flexCenter stats">
                <div className="FlexColStart stat">
                    <span><CountUp start={8000} end={90000}/></span><span>Premium Products</span>
                </div>
            </div>
          </div>
          <div className="hero-right flex items-center justify-center">
            <div className="image-container w-[100%] h-[100%]">
              <img
                src="/hero-image.png"
                alt=""
                className="w-[30rem] h-[35rem] overflow-hidden rounded-tl-[15rem] rounded-tr-[15rem] border-[8px] border-border"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
