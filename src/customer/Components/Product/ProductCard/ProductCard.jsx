import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price, discountedPrice, color, discountPersent, _id } = product;

  return (
    <a href={`/product/${_id}`} className='productCard w-[15rem] border m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={imageUrl} alt='' />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{brand}</p>
          <p className=''>{title}</p>

          <p className='font-semibold opacity-50'>{color}</p>
        </div>

        <div className='flex space-x-2 items-center'>
          <p className='font-semibold'>₹{discountedPrice}</p>
          <p className='opacity-50 line-through'>₹{price}</p>
          <p className='text-green-600 font-semibold'>{discountPersent}% off</p>
        </div>
      </div>
    </a>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    discountPersent: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
