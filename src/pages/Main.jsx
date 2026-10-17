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
              <h1 className="serif italic font-bold text-3xl text-gray-800 mb-3 lg:text-5xl text-center w-[90%] mx-auto">{ header }</h1>
              <p className="poppins text-md text-gray-800 w-[80%] mx-auto flex justify-center items-center lg:text-lg">Select from any category to get Bible quotes / verses relating to it :)</p>
            </header>

            <section className="mt-15 mb-20 lg:ml-25 flex justify-around flex-col lg:mt-25">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Emotional / Mental States:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-1 w-[80%] mx-auto lg:w-[90%]">
                <Card name="Anxious" id="anxious" />
                <Card name="Angry" id="angry" />
                <Card name="Happy" id="happy" />
                <Card name="Guilty" id="guilty" />
                <Card name="Stressed" id="stressed" />
                <Card name="Scared" id="scared" />
                <Card name="Lonely" id="lonely" />
                <Card name="Confused" id="confused" />
                <Card name="Depressed" id="depressed" />
                <Card name="Disappointed" id="disappointed" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Life Situations:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] mx-auto">
                <Card name="Getting married" id="getting-married" />
                <Card name="Going through a breakup" id="going-through-a-breakup" />
                <Card name="Starting a new job" id="starting-a-new-job" />
                <Card name="Dealing with family conflict" id="dealing-with-family-conflict" />
                <Card name="Grieving" id="grieving" />
                <Card name="Becoming a parent" id="becoming-a-parent" />
                <Card name="Moving to a new place" id="moving-to-a-new-place" />
                <Card name="Going through health struggles" id="going-through-health-struggles" />
                <Card name="Searching for a wife" id="searching-for-a-wife" />
                <Card name="Having dispute with someone" id="having-dispute-with-someone" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Topics / Teachings:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] mx-auto">
                  <Card name="Marriage & relationships" id="marriage-and-relationships" />
                  <Card name="Finances & money" id="finances-and-money" />
                  <Card name="Purpose & calling" id="purpose-and-calling" />
                  <Card name="Faith & doubt" id="faith-and-doubt" />
                  <Card name="Honesty & integrity" id="honesty-and-integrity" />
                  <Card name="Serving others" id="serving-others" />
                  <Card name="Jealousy & comparison" id="jealousy-and-comparison" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-wrap flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl lg:text-center">Celebrations / Milestones:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] mx-auto">
                <Card name="New job" id="new-job" />
                <Card name="Birthday" id="birthday" />
                <Card name="Baby birth" id="baby-birth" />
                <Card name="Wedding" id="wedding" />
                <Card name="Graduation" id="graduation" />
                <Card name="Anniversaries" id="anniversaries" />
              </div>
            </section>
        </section>
  )
};

export default Home;
