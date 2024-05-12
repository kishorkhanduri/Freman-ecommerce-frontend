import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/men/clothing/mens_kurta`);
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </button>
  );
};

HomeProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
};

export default HomeProductCard;
