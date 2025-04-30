import "./Animation.css";
import { useEffect, useState } from "react";

function AnimationBars({onFinish}){
        useEffect(() => {
            const timer = setTimeout(() => {
                onFinish();
            }, 1000);
            return () => clearTimeout(timer);
        }
        , [onFinish]);
        

    return(
        <>
        <div class="absolute flex w-full h-full -z-1 items-end justify-center overflow-hidden space-x-2"> 
            {Array.from({length:10}).map((_, i) => (
                    <div 
                        className="bar w-4 rounded bg-white dark:bg-black animate-[rise_0.5s_ease_forwards]" 
                        style={{
                            height: `${(i +1) * 10}px`,
                            animationDelay: `${i * 100}ms`,
                            animationName: 'rise',
                            animationDuration: '0.5s',
                            animationFillMode: 'forwards',
                        }}
                        key={i}>
                    </div>
                )
            )}
        </div>
        </>
    ); 
}

export default AnimationBars;