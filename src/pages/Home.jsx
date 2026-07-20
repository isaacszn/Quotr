import NavBar from "../components/NavBar";

const Home = () => {
  return (
        <section>
            <NavBar />

            <header className="story-script text-4xl text-red-900 mt-20 ml-5 w-[80%]">
              <p>Your daily verses & teachings</p>
            </header>

            <section className="mt-15 flex justify-around flex-col">
              <h1 className="poppins text-2xl font-bold ml-7">Emotions</h1>
              <section className="poppins flex justify-around mt-5 w-[80%] gap-2">
                <div className="border border-yellow-300 py-2 px-5 rounded-lg bg-yellow-100">
                  Angry
                </div>
                <div className="border border-yellow-300 py-2 px-5 rounded-lg bg-yellow-100">
                  Happy
                </div>
                <div className="border border-yellow-300 py-2 px-5 rounded-lg bg-yellow-100">
                  Confused
                </div>
                <div className="border border-yellow-300 py-2 px-5 rounded-lg bg-yellow-100">
                  Scared
                </div>
              </section>
            </section>

            <section className="mt-25 flex justify-around flex-col">
              <h1 className="poppins text-2xl font-bold ml-7">Life Events</h1>
              <section className="poppins flex justify-around mt-5 gap-5">
                <div>
                  Wedding ceremony
                </div>
                <div>
                  Graduation
                </div>
                <div>
                  Birthday ceremony
                </div>
                <div>
                  Getting a new job
                </div>
              </section>
            </section>
        </section>
  )
};

export default Home;
