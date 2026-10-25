import { useNavigate, useParams, useLocation } from "react-router";
import { useEffect } from "react";
import { CircleArrowLeft } from "lucide-react";
import NavBar from '../components/NavBar';
import scripturesData from "../data/scriptures.json";

const ScripturesListing = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const { cardId } = useParams();

    const selectedCard = scripturesData.find((card) => card.id === cardId);

    if (!selectedCard || selectedCard === undefined) {
        useEffect(() => {
            navigate("*");
        }, []);
    }

    let text = "";

    let writeup = "";

    const cardCategory = location.state?.cardCategory;

    if (cardCategory === "emotion" || cardCategory === "situation") {
        text = "Are you ";
        writeup = "Below are several Scriptures you can read, meditate or reflect on:";
    } else if (cardCategory === "topic") {
        text = "Do you want to explore ";
        writeup = `Below are several Scriptural teaching and saying on the topic, ${cardId.replaceAll("-", " ")}:`;
    } else if (cardCategory === "milestones") {
        text = "Are you celebrating a/an ";
        writeup = `Below are several Scriptural saying on celebrating a/an ${cardId.replaceAll("-", " ")}:`;
    } else {
        useEffect(() => {
            navigate("*");
        }, []);
    }

    return (
        <>
            <section className="mt-50 mb-10">
                <NavBar />

                <button className="plus-jakarta-sans backdrop-blur-[6px] fixed top-22 left-7 border border-gray-400/50 rounded-full py-2 px-3 text-md text-gray-800 flex gap-2 justify-center items-center cursor-pointer lg:text-lg lg:top-35 lg:left-20" onClick={() => navigate(-1)}>
                    <span className="text-black hover:text-gray-900 transition"><CircleArrowLeft size={40} /></span>
                    Go back
                </button>

                <header className="text-gray-900 text-center">
                    <h1 className="plus-jakarta-sans-medium text-3xl mx-auto mb-2 w-[90%] lg:text-4xl">{ text }<span className="plus-jakarta-sans-extrabold">{ cardId.replaceAll("-", " ") }</span>?</h1>
                    <p className="plus-jakarta-sans-medium w-[70%] mx-auto lg:text-lg">{ writeup }</p>
                </header>

                <section className="mt-12">
                    <p className="plus-jakarta-sans-extrabold italic text-gray-900 ml-10 lg:ml-28">Read:</p>

                    <ul className="cormorant-garamond flex items-center justify-center flex-wrap gap-5 w-[90%] lg:w-[90%] mt-10 mb-10 mx-auto">
                        { selectedCard.scriptures.map((reference) => (
                            <li key={reference} className="cormorant-garamond-medium font-bold text-gray-900 text-xl w-[153px] lg:w-[180px] cursor-pointer hover:text-gray-900/80 hover:text-lg
                            active:text-gray-900/80 active:text-lg focus:text-gray-900/80 focus:text-lg transition" title="Click or tap to copy the reference." onClick={() => navigator.clipboard.writeText(reference)}>
                                <span className="playfair-display-extrabold-italic">* {" "}</span>
                                {reference}
                            </li>
                        )) }
                    </ul>
                </section>

                <section className="mt-15">
                    <p className="plus-jakarta-sans-medium font-bold text-lg text-gray-900 ml-10 lg:ml-28 mb-5">Other related { cardCategory }:</p>

                    <div>

                    </div>
                </section>
            </section>
        </>
    );
};

export default ScripturesListing;
