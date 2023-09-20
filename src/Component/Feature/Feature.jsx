import propTypes from "prop-types";

const Feature = ({ feature }) => {
  console.log(feature);
  return (
    <div className="text-center">
      <h4>{feature}</h4>
    </div>
  );
};

Feature.propTypes = {
  feature: propTypes.string.isRequired,
};
export default Feature;
