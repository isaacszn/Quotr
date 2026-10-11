import { Link } from "react-router";

const NotFound = () => {
    return (
      <>
        <section className="flex flex-col justify-center items-center min-h-[100%] w-[100%]">
                <header className="monospace mt-20 text-red-900 font-bold text-[150px]">404</header>
                <h1 className="poppins text-xl mt-10 text-gray-900">Oops! {":("}</h1>
                <span className="poppins text-xl w-[90%] text-center text-gray-900">The page you're trying to reach isn't available.</span>
                <span className="poppins text-xl mt-20 font-bold italic">
                    Go back to {" "}
                    <Link to="/" className="text-red-900 font-bold underline">home</Link>
                </span>
        </section>
      </>
    );
};

export default NotFound;
