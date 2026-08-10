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

            <header className="mt-30 ml-5 lg:ml-20 w-[80%]">
              <h1 className="serif italic font-bold text-xl text-gray-800 mb-3 lg:text-5xl">{ header }</h1>
              <p className="poppins text-md text-gray-800 lg:text-lg">Select from any category to get Bible quotes/verses relating to it :)</p>
            </header>

            <section className="mt-15 mb-10 lg:ml-25 flex justify-around flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl">Emotional/Mental States:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] ml-[10%] mr-[10%] lg:w-[40%] lg:ml-5">
                <Card name="Anxious" />
                <Card name="Angry" />
                <Card name="Happy" />
                <Card name="Sad" />
                <Card name="Stressed" />
                <Card name="Lonely" />
                <Card name="Confused" />
              </div>
            </section>

            <section className="mb-10 lg:ml-25 flex justify-around flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl">Life Situations:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] ml-[10%] mr-[10%] lg:w-[40%] lg:ml-5">
                <Card name="Getting married" />
                <Card name="Going through a breakup" />
                <Card name="Starting a new job" />
                <Card name="Dealing with family conflict" />
                <Card name="Grieving/Loss" />
                <Card name="Becoming a parent" />
                <Card name="Moving to a new place" />
                <Card name="Health struggles" />
              </div>
            </section>

            <section className="mb-10 lg:ml-25 flex justify-around flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl">Topics/Teachings:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] ml-[10%] mr-[10%] lg:w-[40%] lg:ml-5">
                  <Card name="Marriage & relationships" />
                  <Card name="Finances & money" />
                  <Card name="Purpose & calling" />
                  <Card name="Faith & doubt" />
                  <Card name="Honesty & integrity" />
                  <Card name="Serving others" />
                  <Card name="Jealousy & comparison" />
              </div>
            </section>

            <section className="mb-20 lg:ml-25 flex justify-around flex-wrap flex-col">
              <h1 className="poppins text-gray-800 text-xl font-bold ml-7 lg:text-2xl">Celebrations/Milestones:</h1>
              <div className="poppins flex justify-evenly items-center flex-wrap mt-5 gap-2 w-[80%] ml-[10%] mr-[10%] lg:w-[40%] lg:ml-5">
                <Card name="Wedding" />
                <Card name="Birthday" />
                <Card name="Graduation" />
                <Card name="New job" />
                <Card name="Baby birth" />
                <Card name="Anniversaries" />
              </div>
            </section>
        </section>
  )
};

export default Home;
