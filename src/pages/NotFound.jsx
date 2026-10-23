import { Link } from "react-router";

const NotFound = () => {
    return (
      <>
        <section className="flex flex-col justify-center items-center min-h-[100%] w-[100%]">
                <header className="jetbrains-mono-extrabold mt-20 text-red-900 font-bold text-[150px]">404</header>
                <h1 className="plus-jakarta-sans-medium text-xl mt-10 text-gray-900">Oops! {":("}</h1>
                <span className="plus-jakarta-sans-medium text-xl w-[90%] text-center text-gray-900">The page or content you're trying to reach isn't available.</span>
                <span className="plus-jakarta-sans-medium text-xl mt-20 italic">
                    Go back to {" "}
                    <Link to="/" className="text-red-900 font-bold underline">home</Link> or <Link to="/app" className="text-red-900 font-bold underline">app</Link>
                </span>
        </section>
      </>
    );
};

export default NotFound;
