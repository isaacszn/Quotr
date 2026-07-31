import { Link } from "react-router";
import NavBar from '../components/NavBar';

const LandingPage = () => {
    return (
        <>
            <section className="h-[100%]">
                <NavBar />

                <section className="mt-15 lg:mt-17 lg:flex lg:justify-around lg:gap-10">
                    <section>
                        <img src="/logo.svg" alt="Logo" className="lg:mt-[30px] lg:ml-[90px] h-[250px] w-[250px] block mt-5 mx-auto lg:w-[500px] lg:h-[500px]" />
                    </section>

                    <section className="lg:mt-15 lg:ml-[50px]">
                        <header>
                            <span className="story-script font-bold text-7xl lg:text-[130px] text-center block">Find Your</span>
                            <span className="story-script font-bold text-7xl lg:text-[130px] text-center block">Verse</span>
                        </header>
                        <p className="poppins text-gray-900 text-xl mt-5 lg:mt-12 text-center mx-auto w-[80%] lg:w-[70%] lg:text-2xl">Scripture-based guidance, Bible readings and teachings for your life's moments.</p>
                        <Link to="/home">
                            <button className="poppins text-lg bg-red-900 text-yellow-100 rounded-full py-3 px-2 w-[60%] block mx-auto my-10 cursor-pointer hover:bg-red-800 active:bg-red-800 focus:bg-red-800 transition shadow-sm shadow-red-500/90 hover:shadow-md hover:shadow-red-900 lg:w-[250px]">Get Started</button>
                        </Link>
                    </section>
                </section>
            </section>
        </>
    )
};

export default LandingPage;
