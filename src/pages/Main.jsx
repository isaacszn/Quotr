import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

const Home = () => {
  const [ header, setHeader ] = useState("");
  const headers = ["What's on your mind?", "What's calling you?", "What's your burden?", "A Verse for Your Heart", "Unwrap your burdens", "Want console?"];

  // Randomly pick a header from the headers array once component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * headers.length);
    const header = headers[randomIndex];
    setHeader(header);
    //console.log(header);
  }, []);

  return (
        <section>
            <NavBar />

            <header className="mt-35 mx-auto lg:mt-45">
              <h1 className="cormorant-garamond-bold-italic text-4xl text-gray-800 mb-3 lg:text-5xl text-center w-[90%] mx-auto">{ header }</h1>
              <p className="plus-jakarta-sans-medium text-md text-gray-800 w-[80%] mx-auto text-center flex justify-center items-center lg:text-lg">Select from any category to get Bible quotations or readings relating to it.</p>
            </header>

            <section className="mt-15 mb-20 lg:ml-25 flex justify-around flex-col lg:mt-25">
              <h1 className="plus-jakarta-sans-medium text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Emotional / Mental States:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-1 w-[80%] mx-auto lg:w-[90%]">
                <Card name="Anxious" id="anxious" category="emotion" />
                <Card name="Angry" id="angry" category="emotion" />
                <Card name="Happy" id="happy" category="emotion" />
                <Card name="Guilty" id="guilty" category="emotion" />
                <Card name="Stressed" id="stressed" category="emotion" />
                <Card name="Scared" id="scared" category="emotion" />
                <Card name="Sad" id="sad" category="emotion" />
                <Card name="Lonely" id="lonely" category="emotion" />
                <Card name="Confused" id="confused" category="emotion" />
                <Card name="Depressed" id="depressed" category="emotion" />
                <Card name="Disappointed" id="disappointed" category="emotion" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-col">
              <h1 className="plus-jakarta-sans-medium text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Life Situations:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] mx-auto">
                <Card name="Getting married" id="getting-married" category="situation" />
                <Card name="Going through a breakup" id="going-through-a-breakup" category="situation" />
                <Card name="Starting a new job" id="starting-a-new-job" category="situation" />
                <Card name="Dealing with family conflict" category="situation" id="dealing-with-family-conflict" />
                <Card name="Grieving" id="grieving" category="situation" />
                <Card name="Becoming a parent" id="becoming-a-parent" category="situation" />
                <Card name="Moving to a new place" id="moving-to-a-new-place" category="situation" />
                <Card name="Going through health struggles" id="going-through-health-struggles" category="situation" />
                <Card name="Searching for a wife" id="searching-for-a-wife" category="situation" />
                <Card name="Having dispute with someone" id="having-dispute-with-someone" category="situation" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-col">
              <h1 className="plus-jakarta-sans-medium text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Topics / Teachings:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] mx-auto">
                  <Card name="Marriage & relationships" id="marriage-and-relationships" category="topic" />
                  <Card name="Finances & money" id="finances-and-money" category="topic" />
                  <Card name="Purpose & calling" id="purpose-and-calling" category="topic" />
                  <Card name="Faith & doubt" id="faith-and-doubt" category="topic" />
                  <Card name="Honesty & integrity" id="honesty-and-integrity" category="topic" />
                  <Card name="Serving others" id="serving-others" category="topic" />
                  <Card name="Jealousy & comparison" id="jealousy-and-comparison" category="topic" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-wrap flex-col">
              <h1 className="plus-jakarta-sans-medium text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Celebrations / Milestones:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] mx-auto">
                <Card name="New job" id="new-job" category="milestones" />
                <Card name="Birthday" id="birthday" category="milestones" />
                <Card name="Baby birth" id="baby-birth" category="milestones" />
                <Card name="Wedding" id="wedding" category="milestones" />
                <Card name="Graduation" id="graduation" category="milestones" />
                <Card name="Anniversary" id="anniversary" category="milestones" />
              </div>
            </section>
        </section>
  )
};

export default Home;
