import { useNavigate } from "react-router";

const Card = (props) => {
    const navigate = useNavigate();
    // console.log(props.category)
    // console.log(props.id)

    return (
      <div className="plus-jakarta-sans text-gray-900 border border-gray-300 p-3 bg-yellow-100 hover:bg-yellow-100/50 hover:border-gray-500 focus:border-gray-500 active:border-gray-500 cursor-pointer transition lg:text-lg" onClick={() => navigate(`scriptures/${props.id}`, { preventScrollReset: false, state: { cardCategory: props.category } })}>
          { props.name }
      </div>
    );
};

export default Card;
