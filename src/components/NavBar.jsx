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
        <nav className="bg-red-900 text-yellow-100 flex justify-around items-center gap-20 w-[100%] h-[60px] fixed top-0 z-100">
            <div className="lg:w-[10%]">
                <img src="/logo_navbar.svg" alt="Logo" className="rounded-full flex justify-center w-[40px] h-[40px] lg:ml-10" />
            </div>

            <div className="story-script font-bold text-2xl lg:text-3xl lg:min-w-[20%] lg:ml-[490px]">Quotr</div>

            <div className="rounded-full w-[40px] h-[40px] cursor-pointer transition lg:hidden flex justify-center items-center transition" onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <span className="text-3xl font-bold text-yellow-100 text-center"><X className="w-6 h-10" strokeWidth={3} /></span> : <span className="text-3xl font-bold text-yellow-100 text-center"><Menu className="w-6 h-6" strokeWidth={3} /></span> }
            </div>

            {/* FIXED STYLING BREAKDOWN BELOW */}
            { isOpen && (
                <div className="fixed left-0 right-0 top-[60px] bg-red-900 text-yellow-100 flex flex-col p-6 space-y-4 z-50 shadow-xl border-t border-red-900 animate-in fade-in slide-in-from-top-2 duration-500 poppins underline transition">
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="font-bold hover:text-white transition"><span>Create account</span></Link>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="font-bold hover:text-white transition"><span>Log in</span></Link>
                    {/*<span></span>*/}
                    {/* ADD THEME TOGGLER HERE */}
                </div>
            ) }

            <div className="hidden poppins font-bold underline lg:flex justify-center items-center gap-10 lg:w-[40%] lg:mr-15">
                <Link to="/signup"><span>Create account</span></Link>
                <Link to="/login"><span>Log in</span></Link>
                {/*<span></span>*/}
                {/* ADD THEME TOGGLER HERE */}
            </div>
        </nav>
    )
};

export default NavBar;
