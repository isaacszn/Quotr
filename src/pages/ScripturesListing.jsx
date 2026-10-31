import { useEffect, useMemo } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { CircleArrowLeft } from "lucide-react";
import NavBar from "../components/NavBar";
import scripturesData from "../data/scriptures.json";

const buildBibleGatewayUrl = (reference) =>
  `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=NIV`;

const ScripturesListing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardId } = useParams();

  const selectedCard = scripturesData.find((card) => card.id === cardId);

  useEffect(() => {
    if (!selectedCard) {
      navigate("/app", { replace: true });
    }
  }, [selectedCard, navigate]);

  const cardCategory =
    location.state?.cardCategory ?? selectedCard?.group ?? "";

  const relatedCards = useMemo(() => {
    if (!selectedCard) {
      return [];
    }

    return scripturesData
      .filter(
        (card) => card.group === selectedCard.group && card.id !== selectedCard.id,
      )
      .slice(0, 6);
  }, [selectedCard]);

  const relatedLabel =
    cardCategory === "emotion"
      ? "emotional states"
      : cardCategory === "situation"
        ? "life situations"
        : cardCategory === "topic"
          ? "topics"
          : cardCategory === "milestones"
            ? "milestones"
            : "related entries";

  let text = "";
  let writeup = "";

  if (cardCategory === "emotion" || cardCategory === "situation") {
    text = "Are you ";
    writeup =
      "Below are several Scriptures you can read, meditate or reflect on:";
  } else if (cardCategory === "topic") {
    text = "Do you want to explore ";
    writeup = `Below are several Scriptural teachings on the topic, ${cardId.replaceAll("-", " ")}:`;
  } else if (cardCategory === "milestones") {
    text = "Are you celebrating a/an ";
    writeup = `Below are several Scriptural passages for celebrating a/an ${cardId.replaceAll("-", " ")}:`;
  } else if (selectedCard) {
    text = "Are you ";
    writeup =
      "Below are several Scriptures you can read, meditate or reflect on:";
  }

  if (!selectedCard) {
    return null;
  }

  const handleReferenceClick = (event, reference) => {
    event.preventDefault();
    window.open(buildBibleGatewayUrl(reference), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="mt-50 mb-10">
        <NavBar />

        <button
          className="plus-jakarta-sans backdrop-blur-[6px] fixed top-22 left-7 border border-gray-400/50 rounded-full py-2 px-3 text-md text-gray-800 flex gap-2 justify-center items-center cursor-pointer lg:text-lg lg:top-35 lg:left-20 select-none touch-manipulation"
          onClick={() => navigate(-1)}
          type="button"
        >
          <span className="text-black hover:text-gray-900 transition">
            <CircleArrowLeft size={40} />
          </span>
          Go back
        </button>

        <header className="text-gray-900 text-center">
          <h1 className="plus-jakarta-sans-medium text-3xl mx-auto mb-2 w-[90%] lg:text-4xl">
            {text}
            <span className="plus-jakarta-sans-extrabold">
              {cardId.replaceAll("-", " ")}
            </span>
            ?
          </h1>
          <p className="plus-jakarta-sans-medium w-[70%] mx-auto lg:text-lg">
            {writeup}
          </p>
        </header>

        <section className="mt-12">
          <p className="plus-jakarta-sans-extrabold italic text-gray-900 ml-10 lg:ml-28">
            Read:
          </p>

          <ul className="cormorant-garamond flex items-center justify-center flex-wrap gap-5 w-[90%] lg:w-[90%] mt-10 mb-10 mx-auto">
            {selectedCard.scriptures.map((reference) => (
              <li
                key={reference}
                className="select-none touch-manipulation"
              >
                <a
                  href={buildBibleGatewayUrl(reference)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => handleReferenceClick(event, reference)}
                  className="reference-link cormorant-garamond-medium font-bold text-gray-900 text-xl w-[153px] lg:w-[180px] transition select-none touch-manipulation"
                  title={`Read ${reference} on Bible Gateway`}
                  aria-label={`Read ${reference} on Bible Gateway`}
                >
                  <span className="playfair-display-extrabold-italic">* </span>
                  {reference}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-15">
          <p className="plus-jakarta-sans-medium font-bold text-lg text-gray-900 ml-10 lg:ml-28 mb-5">
            Other related {relatedLabel}:
          </p>

          <div className="flex flex-wrap gap-3 justify-center px-6 pb-10 lg:px-20">
            {relatedCards.length > 0 ? (
              relatedCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() =>
                    navigate(`/app/scriptures/${card.id}`, {
                      state: { cardCategory: card.group },
                    })
                  }
                  className="plus-jakarta-sans text-gray-900 text-sm md:text-base border border-gray-300 rounded-full bg-yellow-100 px-4 py-2 transition hover:bg-yellow-100/70 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 select-none touch-manipulation"
                >
                  {card.name}
                </button>
              ))
            ) : (
              <p className="plus-jakarta-sans text-gray-700">
                No other related items available right now.
              </p>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default ScripturesListing;
