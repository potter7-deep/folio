


function Contact(){
    return(
        <>
            <section id="contact" class="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height">
                <h2 class="text-4xt font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    Contact Us
                </h2>
                <form action="" class="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-start gap-4">
                    <label for="subject" className="dark:text-slate-400">Subject:</label>
                    <input type="text" name="subject" id="subject" required minlength="3" maxlength="60" placeholder="Your Subject" class="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none dark:bg-white" />
                    <label for="messege" className="dark:text-slate-400">Messege: </label>
                    <textarea name="messege" id="messege" cols="30" rows="10" placeholder="Your Messege" required class="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none dark:bg-white"></textarea>
                    <button class="bg-teal-700 dark:bg-black dark:border dark:text-sky-300 hover:dark:bg-sky-300 hover:dark:text-black  active:bg-cyan-400 text-white p-3 w-48 rounded-xl border dark:border-solid dark:border-sky-300">
                        Submit
                    </button>
                </form>
            </section>
        </>
    );
}

export default Contact;