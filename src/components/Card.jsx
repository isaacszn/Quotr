const Card = (props) => {
  return (
    <div className="text-gray-900 border border-gray-300 p-2 bg-yellow-100 hover:bg-yellow-100/50 hover:border-gray-500 focus:border-gray-500 active:border-gray-500 cursor-pointer transition lg:text-lg">
        { props.name }
    </div>
  );
};

export default Card;
