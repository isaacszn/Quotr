import NavBar from "../components/NavBar";

const About = () => {
    return (
        <>
            <section>
                <NavBar />

                <main className="mt-30 ml-6 lg:ml-25">
                    <header><h1 className="serif text-gray-800 text-3xl font-bold italic lg:text-5xl">About Quotr</h1></header>
                    <p className="poppins text-gray-800 text-md w-[85%] lg:w-[70%] mt-5 lg:text-lg ml-5">Sometimes, you don't know what verse you're looking for. You just know what you're feeling.</p>
                    <p className="poppins text-gray-800 text-md w-[85%] lg:w-[70%] mt-5 lg:text-lg ml-5"><b>Quotr</b> was created to make finding relevant Scripture easier.</p>
                    <p className="poppins text-gray-800 text-md w-[85%] lg:w-[70%] mt-5 lg:text-lg ml-5">Whether you're feeling anxious, lonely, confused...or you're simply going through a difficult season, <b>Quotr</b> helps you discover Bible verses or passages connected to what you're experiencing.</p>

                    <header><h1 className="serif text-gray-800 text-3xl font-bold italic mt-15 lg:text-5xl">Why Quotr?</h1></header>
                    <p className="poppins text-gray-800 text-md w-[85%] lg:w-[70%] mt-5 lg:text-lg ml-5">There are thousands of verses in the Bible and sometimes finding the right one for a particular moment can be difficult.</p>
                    <p className="poppins text-gray-800 text-md w-[85%] lg:w-[70%] mt-5 lg:text-lg ml-5"><b>Quotr</b> organizes Scripture around everyday emotions, situations and experiences so you can spend less time searching and more time reflecting.</p>

                    <header><h1 className="serif text-gray-900 text-3xl font-bold italic mt-15 lg:text-5xl">What Quotr isn't</h1></header>
                    <p className="poppins text-gray-800 text-md w-[85%] lg:w-[70%] mt-5 mb-20 lg:text-lg ml-5"><b>Quotr</b> isn't a replacement for the Bible, prayer, pastoral guidance, or professional help.<br />It's simply a tool for helping you discover Scripture that may speak to your current situation.</p>
                </main>

                <footer>
                    <p className="serif text-center text-gray-800 italic mb-10">Created by <a className="text-red-900 underline" href="https://x.com/iam___zik" target="_blank">Isaac a.k.a Z!K</a></p>
                </footer>
            </section>
        </>
    );
};

export default About;
