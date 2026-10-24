import { Link } from "react-router";
import NavBar from '../components/NavBar';
import { MoveRight } from "lucide-react";

const LandingPage = () => {
    return (
        <>
            <section className="h-[100%] mb-15">
                <NavBar />

                <section className="mt-15 lg:mt-17 lg:flex lg:justify-around lg:gap-10">
                    <section>
                        <img src="/logo.svg" alt="Logo" className="lg:mt-[30px] lg:ml-[90px] h-[250px] w-[250px] block mt-5 mx-auto lg:w-[500px] lg:h-[500px]" />
                    </section>

                    <section className="lg:mt-16 lg:ml-[50px]">
                        <header>
                            <span className="playfair-display-extrabold-italic text-7xl lg:text-[130px] text-center block">Find Your</span>
                            <span className="playfair-display-extrabold-italic text-7xl lg:text-[130px] text-center block">Verse</span>
                        </header>
                        <div>
                            <p className="plus-jakarta-sans text-gray-900 text-xl mt-5 lg:mt-12 text-center mx-auto w-[80%] lg:w-[70%] lg:text-2xl">Find relevant Bible quotations and readings that are connected to what you're experiencing.</p>
                            <p className="plus-jakarta-sans underline text-red-900 text-sm text-center mx-auto mt-2 hover:text-red-900/80"><Link to="/about">More about Quotr</Link></p>
                        </div>
                        <Link to="/app">
                            <button className="plus-jakarta-sans flex justify-center items-center gap-3 text-lg bg-red-900 text-yellow-100 rounded-full py-3 px-5 w-[60%] block mx-auto mt-13 cursor-pointer hover:bg-red-800 active:bg-red-800 focus:bg-red-800 transition shadow-sm shadow-red-500/90 hover:shadow-md hover:shadow-red-900 lg:mt-10 lg:w-[250px]">Get Started <MoveRight size={40} strokeWidth={1.6} /></button>
                        </Link>
                    </section>
                </section>
            </section>
        </>
    )
};

export default LandingPage;
