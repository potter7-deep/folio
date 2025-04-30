import Mobile from './Mobile';
import Desktop from './Desktop';


function Header(){
    return(
        <>
            <header class="backdrop-blur-md sticky pb-[10px] pt-[10px] pl-[7px] pr-[7px] top-0 z-10 max-w-full">
                <section class="max-w-full mx-auto flex justify-between items-center">
                    <h1 class="text-4xl font-bold cursor-pointer">
                        <a href="#hero" className='text-teal-300 dark:text-sky-300'>Dan.</a>
                    </h1>
                    <Desktop/>
                </section>
                <Mobile/>
            </header>
        </>
    );
}

export default Header