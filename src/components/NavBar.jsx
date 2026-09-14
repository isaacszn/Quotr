import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    // Toggler function
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-red-900 text-yellow-100 flex justify-around items-center gap-20 w-[100%] h-[60px] fixed top-0 z-100 lg:h-[70px] lg:py-[3.5%]">
            <div className="lg:w-[10%]">
                <a href="https://usequotr.vercel.app">
                    <img src="/logo_navbar.svg" alt="Logo" className="rounded-full flex justify-center w-[40px] h-[40px] lg:ml-10" />
                </a>
            </div>

            <div className="story-script font-bold text-2xl lg:text-4xl lg:min-w-[20%] lg:ml-[490px]"><a href="https://usequotr.vercel.app">Quotr</a></div>

            <div className="rounded-full w-[40px] h-[40px] cursor-pointer transition lg:hidden flex justify-center items-center transition" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <span className="text-3xl font-bold bg-yellow-100 text-black rounded-full w-9 h-9 flex justify-center items-center text-center hover:bg-yellow-50 transition"><X className="w-6 h-10" strokeWidth={3} /></span> : <span className="text-3xl font-bold text-yellow-50 text-center"><Menu className="w-6 h-6" strokeWidth={3} /></span> }
            </div>

            { isOpen && (
                <div className="fixed left-0 right-0 top-[60px] bg-red-900 text-yellow-100 flex flex-col p-6 space-y-4 z-50 shadow-xl border-t border-red-900 animate-in fade-in slide-in-from-top-2 duration-500 poppins underline transition">
                    <Link to="/" onClick={() => setIsOpen(false)}><span className="font-bold hover:text-yellow-50 transition">Home</span></Link>
                    <Link to="/app" onClick={() => setIsOpen(false)}><span className="font-bold hover:text-yellow-50 transition">Find Your Verse</span></Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}><span className="font-bold hover:text-yellow-50 transition">About Quotr</span></Link>
                    {/*<span></span>*/}
                    {/* ADD THEME TOGGLER HERE */}
                </div>
            ) }

            {/* Desktop Nav */}
            <div className="hidden poppins font-bold underline lg:flex justify-center items-center gap-10 lg:w-[40%] lg:mr-15">
                <Link to="/" onClick={() => setIsOpen(false)}><span className="font-bold hover:text-yellow-50 transition">Home</span></Link>
                    <Link to="/app" onClick={() => setIsOpen(false)}><span className="font-bold hover:text-yellow-50 transition">Find Your Verse</span></Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}><span className="font-bold hover:text-yellow-50 transition">About Quotr</span></Link>
                {/*<span></span>*/}
                {/* ADD THEME TOGGLER HERE */}
            </div>
        </nav>
    )
};

export default NavBar;
