import { useNavigate, useParams, useLocation } from "react-router";
import { useEffect } from "react";
import { CircleArrowLeft } from "lucide-react";
import NavBar from '../components/NavBar';
import ScriptureCard from '../components/ScriptureCard';

const ScripturesListing = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const cardCategory = location.state?.cardCategory;

    const { cardId } = useParams();

    let text = "";
    let writeup = "";

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
            <section>
                <NavBar />

                <button className="plus-jakarta-sans text-md text-gray-800 mt-30 mb-15 ml-7 flex gap-2 justify-center items-center cursor-pointer lg:mt-40 lg:ml-20 lg:text-lg lg:mb-7" onClick={() => navigate(-1)}>
                    <span className="text-black"><CircleArrowLeft size={40} /></span>
                    Go back
                </button>

                <header className="text-gray-900 text-center">
                    <h1 className="plus-jakarta-sans-medium text-3xl mx-auto mb-2 w-[90%] lg:text-4xl">{ text }<span className="plus-jakarta-sans-extrabold">{ cardId.replaceAll("-", " ") }</span>?</h1>
                    <p className="plus-jakarta-sans-medium w-[70%] mx-auto lg:text-lg">{ writeup }</p>
                </header>

                <section className="mt-12">
                    <ScriptureCard reference="Luke 1:37" preview="For with God nothing shall be..." full_scripture="For with God nothing shall be impossible" />
                </section>
            </section>
        </>
    );
};

export default ScripturesListing;
