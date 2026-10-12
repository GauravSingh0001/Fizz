"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: { trigger: container.current, start: "top top", end: "bottom bottom", scrub: 1 },
        })
            .fromTo(".road-fill", { scaleX: 0.05 }, { scaleX: 0.95, ease: "none", duration: 1 })
            .fromTo(".car-wrapper", { left: "5%", xPercent: -20, yPercent: -50 }, { left: "95%", xPercent: -20, yPercent: -50, ease: "none", duration: 1 }, 0)
            .fromTo([".card-top-1", ".card-top-2"], { opacity: 0 }, { opacity: 1, stagger: 0.15, ease: "power2.out", duration: 0.8 }, 0.45)
            .fromTo([".card-bottom-1", ".card-bottom-2"], { opacity: 0 }, { opacity: 1, stagger: 0.15, ease: "power2.out", duration: 0.8 }, 0.6);
    }, { scope: container });

    return (
        <main ref={container} className="relative w-full bg-[#d1d1d1] min-h-[250vh]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-x-hidden">
                <div className="relative w-full">
                    <div className="absolute bottom-full right-[10%] p-5 flex items-end z-10">
                        <div className="card-top-1 bg-[#d8f834] h-[150px] p-[30px] rounded-xl flex flex-col justify-between whitespace-nowrap">
                            <div className="text-[56px] leading-none font-bold text-black tracking-tight">58%</div>
                            <div className="text-[17px] font-medium text-black leading-none">Increase in pick up point use</div>
                        </div>
                        <div className="card-top-2 bg-[#282828] h-[150px] p-[30px] rounded-xl flex flex-col justify-between whitespace-nowrap -ml-[10px] z-20">
                            <div className="text-[56px] leading-none font-bold text-white tracking-tight">27%</div>
                            <div className="text-[15px] font-medium text-white leading-none">Increase in pick up point use</div>
                        </div>
                    </div>

                    <div id="road" className="relative w-full h-[200px] bg-black flex items-center overflow-hidden">
                        <div className="road-fill absolute inset-0 bg-[#2cd66a] origin-left will-change-transform" />
                        <div className="car-wrapper absolute top-1/2 z-20 pointer-events-none will-change-transform flex items-center h-full" style={{ left: "5%" }}>
                            <img
                                src="https://paraschaturvedi.github.io/car-scroll-animation/McLaren%20720S%202022%20top%20view.png"
                                alt="McLaren 720S"
                                className="h-full w-auto max-w-none object-contain select-none"
                            />
                        </div>
                        <span className="road-text relative z-10 text-6xl md:text-8xl lg:text-9xl font-black text-black tracking-tight whitespace-nowrap pl-10 md:pl-16 select-none">
                            WELCOME ITZFIZZ
                        </span>
                    </div>

                    <div className="absolute top-full right-[12%] p-5 flex items-start z-10">
                        <div className="card-bottom-1 bg-[#56b8ff] h-[150px] p-[30px] rounded-xl flex flex-col justify-between whitespace-nowrap">
                            <div className="text-[56px] leading-none font-bold text-black tracking-tight">23%</div>
                            <div className="text-base font-medium text-black leading-none">Decreased in customer phone calls</div>
                        </div>
                        <div className="card-bottom-2 bg-[#fa6424] h-[150px] p-[30px] rounded-xl flex flex-col justify-between whitespace-nowrap -ml-[26px] z-20">
                            <div className="text-[56px] leading-none font-bold text-black tracking-tight">40%</div>
                            <div className="text-base font-medium text-black leading-none">Decreased in customer phone calls</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}