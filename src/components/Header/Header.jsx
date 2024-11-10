import React from "react";


const Header = () => {
    return (
        <section className="h-wrapper bg-black text-white">
            <div className="flex paddings innerWidth h-container justify-between py-4  text-secondary">

                <img src="/homyz.png" alt="logo" width={100} />


                <div className="h-menu flex items-center gap-8">
                    <a href="" className="hover:cursor-pointer">Residencies</a>
                    <a href="" className="hover:cursor-pointer">Our Value</a>
                    <a href="" className="hover:cursor-pointer">Contact Us</a>
                    <a href="" className="hover:cursor-pointer">Get Started</a>

                    <button className="button font-[500] px-2 py-3 text-white bg-blue rounded-[6px] border-none hover:cursor-pointer hover:transform-scale(1.1) transition-all-300ms ease-in-out"> 
                    <a href="">Contact</a>

                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header