import { useNavigate } from "react-router";

const Card = (props) => {
    const navigate = useNavigate();
    // console.log(props.category)
    // console.log(props.id)

    return (
      <div className="plus-jakarta-sans text-gray-900 text-lg md:text-xl border border-gray-300 rounded-full bg-yellow-100 px-4 py-2 transition hover:bg-yellow-100/70 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 select-none touch-manipulation cursor-pointer" onClick={() => navigate(`scriptures/${props.id}`, { preventScrollReset: false, state: { cardCategory: props.category } })}>
          { props.name }
      </div>
    );
};

export default Card;
