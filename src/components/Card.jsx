import { useNavigate } from "react-router";

const Card = (props) => {
    const navigate = useNavigate();
    // console.log(props.category)
    // console.log(props.id)

    return (
      <div className="plus-jakarta-sans text-gray-900 text-[17.5px] flex items-center justify-center rounded-full border border-gray-300 p-3 bg-yellow-100 hover:bg-yellow-100/50 hover:border-gray-500 focus:border-gray-500 active:border-gray-500 cursor-pointer transition w-[170px] h-[74px] lg:text-lg lg:h-[78px]" onClick={() => navigate(`scriptures/${props.id}`, { preventScrollReset: false, state: { cardCategory: props.category } })}>
          { props.name }
      </div>
    );
};

export default Card;
