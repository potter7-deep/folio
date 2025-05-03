import Mobile from './Mobile';
import Desktop from './Desktop';


function Header(){
    return(
        <>
            <header className="rounded bg-white dark:bg-black shadow-xl shadow-teal-100 dark:shadow-gray-900 sticky pb-[10px] pt-[10px] pl-[7px] pr-[7px] top-0 z-10 max-h-full max-w-full">
                <section className="max-w-full mx-auto flex justify-between items-center">
                    <h1 className="text-4xl font-bold cursor-pointer">
                        <a href="#hero" className='text-teal-600 dark:text-sky-300 pl-[10px]'>Dan Maina.</a>
                    </h1>
                    <Desktop/>
                </section>
                <Mobile/>
            </header>
        </>
    );
}

export default Header