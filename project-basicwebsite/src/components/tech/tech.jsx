import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Tech() {
    return (
        <div className="flex flex-col max-lg:flex-wrap md:flex-row justify-center items-center mx-5 md:gap-x-6 gap-y-6 mb-10 mt-10">

            <div className="w-full max-w-[410px] min-h-[240px] pb-4 bg-white border-solid border-gray-300 border-2 backdrop-blur-md shadow-[0_0_20px_rgba(255,140,0,0.2)] rounded-[20px] ">
                <div className="text-[clamp(20px,2.3vw,28px)] text-orange-400 font-bold mt-7 mb-1 text-center">Frontend Development</div>
                <div
                    className="flex  items-center px-8 pt-6 pb-7 relative justify-between text-[clamp(14px,2.5vw,18px)] font-bold overflow-hidden text-black
        before:content-[''] before:absolute before:bottom-4 before:left-8 before:w-[calc(100%-4rem)] before:h-[10px] before:bg-gray-200 before:rounded-full
        after:content-[''] after:absolute after:bottom-4 after:left-8 after:w-[calc((100%-4rem)*0.95)] after:h-[10px] after:rounded-full after:bg-orange-400 transition-all duration-1000 ease-out">
                    <p className="">HTML</p>
                    <p>95%</p>
                </div>
                <div
                    className="flex  items-center px-8 pt-2 pb-7 relative justify-between text-[clamp(14px,2.5vw,18px)] font-bold overflow-hidden text-black
        before:content-[''] before:absolute before:bottom-4 before:left-8 before:w-[calc(100%-4rem)] before:h-[10px] before:bg-gray-200 before:rounded-full
        after:content-[''] after:absolute after:bottom-4 after:left-8 after:w-[calc((100%-4rem)*0.9)] after:h-[10px] after:rounded-full after:bg-orange-400 transition-all duration-1000 ease-out">
                    <p className="">CSS</p>
                    <p>90%</p>
                </div>
                <div
                    className="flex  items-center px-8 pt-2 pb-7 relative justify-between text-[clamp(14px,2.5vw,18px)] font-bold overflow-hidden text-black
        before:content-[''] before:absolute before:bottom-4 before:left-8 before:w-[calc(100%-4rem)] before:h-[10px] before:bg-gray-200 before:rounded-full
        after:content-[''] after:absolute after:bottom-4 after:left-8 after:w-[calc((100%-4rem)*0.70)] after:h-[10px] after:rounded-full after:bg-orange-400 transition-all duration-1000 ease-out">
                    <p className="">JavaScript</p>
                    <p>70%</p>
                </div>
                <div
                    className="flex  items-center px-8 pt-2 pb-7 relative justify-between text-[clamp(14px,2.5vw,18px)] font-bold overflow-hidden text-black
        before:content-[''] before:absolute before:bottom-4 before:left-8 before:w-[calc(100%-4rem)] before:h-[10px] before:bg-gray-200 before:rounded-full
        after:content-[''] after:absolute after:bottom-4 after:left-8 after:w-[calc((100%-4rem)*0.75)] after:h-[10px] after:rounded-full after:bg-orange-400 transition-all duration-1000 ease-out">
                    <p className="">React</p>
                    <p>75%</p>
                </div>
                <div
                    className="flex  items-center px-8 pt-2 pb-7 relative justify-between text-[clamp(14px,2.5vw,18px)] font-bold overflow-hidden text-black
        before:content-[''] before:absolute before:bottom-4 before:left-8 before:w-[calc(100%-4rem)] before:h-[10px] before:bg-gray-200 before:rounded-full
        after:content-[''] after:absolute after:bottom-4 after:left-8 after:w-[calc((100%-4rem)*0.85)] after:h-[10px] after:rounded-full after:bg-orange-400 transition-all duration-1000 ease-out">
                    <p className="">Tailwind</p>
                    <p>85%</p>
                </div>
            </div>
        </div>


    )
}
export default Tech;