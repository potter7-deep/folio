


function Buttons() {
    return (
        <div className="flex items-center gap-5 mt-7.5">
            <a href="#" className="btn inline-block pt-3 pb-3 pl-7.5 pr-7.5 font-medium text-slate-600 bg-cyan-300 border-none rounded-md cursor-pointer shadow-cyan-500/50 hover:bg-slate-600 hover:text-cyan-300 hover:shadow-cyan-500/50">Download CV</a>
            <div className="sci">
                <a className="btn text-inherit p-2 no-underline ml-2 mr-2 text-xl bg-cyan-300 shadow " href="#"><i className='bx bxl-github'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
                <a href="#"><i className='bx bx-x'></i></a>
            </div>
        </div>
    );
}

export default Buttons;