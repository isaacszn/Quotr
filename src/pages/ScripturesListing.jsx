import { useNavigate, useParams } from "react-router";
import NavBar from '../components/NavBar';
import { CircleArrowLeft } from "lucide-react";

const ScripturesListing = () => {
    const navigate = useNavigate();
    const { cardId } = useParams();
    console.log(cardId);

    return (
        <>
            <section>
                <NavBar />

                <button className="poppins text-md text-gray-800 mt-30 mb-20 ml-7 flex gap-2 cursor-pointer" onClick={() => navigate(-1)}>
                    <span className="text-black text-xl"><CircleArrowLeft /></span>
                    Go back
                </button>

                <header className="poppins text-lg text-gray-900 text-center text-bold">
                    { cardId.replaceAll("-", " ") }?
                </header>
            </section>
        </>
    );
};

export default ScripturesListing;
