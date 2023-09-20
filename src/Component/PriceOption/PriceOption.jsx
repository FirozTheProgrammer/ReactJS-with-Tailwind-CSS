import propTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="p-6 m-5 text-center flex flex-col bg-sky-500 text-white border-4 border-sky-200 rounded-xl">
      <h2 className=" mb-5">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/Month</span>
      </h2>
      <h3 className="text-3xl">{name}</h3>
      <div className="flex-grow">
        {features.map((item, index) => (
          <Feature key={index} feature={item}></Feature>
        ))}
      </div>
      <button className="btn border-0 bg-black py-3 px-7 rounded-md mt-6 hover:bg-slate-700 text-white">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: propTypes.object.isRequired,
};

export default PriceOption;
