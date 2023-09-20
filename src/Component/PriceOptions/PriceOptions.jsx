import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceData = [
    {
      id: 1,
      name: "Monthly Membership",
      price: 59.99,
      features: [
        "Unlimited gym access",
        "Group fitness classes",
        "Personal training discounts",
      ],
    },
    {
      id: 2,
      name: "Semi-Annual Membership",
      price: 299.99,
      features: [
        "Unlimited gym access",
        "Group fitness classes",
        "Personal training discounts",
        "Free towels",
      ],
    },
    {
      id: 3,
      name: "Annual Membership",
      price: 499.99,
      features: [
        "Unlimited gym access",
        "Group fitness classes",
        "Personal training discounts",
        "Free towels",
        "Free parking",
      ],
    },
    {
      id: 4,
      name: "Drop-In Pass",
      price: 19.99,
      features: ["One-day gym access"],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl text-center my-7">Best price in this Touwn</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {priceData.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
