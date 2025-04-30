import './change.css'
import React from 'react';
import {Typewriter} from 'react-simple-typewriter';

function Change(){
    // const {text} = useTypewriter({
    //     words: [
    //         "Fullstack developer.", 
    //         "Mobile App developer.", 
    //         "Web App developer.", 
    //         "UI/UX Developer."
    //     ],
    //     loop: true,
    //     typeSpeed: 70,
    //     deleteSpeed: 50,
    //     delaySpeed: 2000
    // });
    return(
        <>
            <h2 className=" font-bold text-center text-teal-600 dark:text-sky-300">
                <Typewriter
                        words = {
                            [
                                "Fullstack developer.", 
                                "Mobile App developer.", 
                                "Web App developer.", 
                                "UI/UX Developer."
                            ]
                        }
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={120}
                        delaySpeed={2000}
                    />
            </h2>
        </>
    );

    // return(
    //     <>
    //         <h2 className="text-xl font-bold text-center">
    //             <span className="text-teal-600 dark:text-sky-300">
    //                 <Typewriter
    //                     words={
    //                         [
    //                             "Fullstack developer.", 
    //                             "Mobile App developer.", 
    //                             "Web App developer.", 
    //                             "UI/UX Developer."
    //                         ]
    //                     }
    //                     loop={true}
    //                     cursor
    //                     cursorStyle='|'
    //                     typeSpeed={70}
    //                     deleteSpeed={50}
    //                     delaySpeed={2000}
    //                 />
    //             </span>
    //         </h2>
    //     </>
    // );
}

export default Change;