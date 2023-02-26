const Product = ({ product }) => {
  return (
    <div className='w-52 hover:scale-105 transition-all cursor-pointer'>
      <figure className='h-60 w-52'>
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          className='rounded-lg'
          src={product?.thumbnail}
          alt={product.title}
        />
      </figure>
      <div className='flex flex-row justify-between py-1 mx-1'>
        <h3 className='font-bold  truncate'>{product?.title}</h3>
        <h5 className='font-bold'>${product.price}</h5>
      </div>
      <div className='mx-1 truncate text-xs text-black-200'>
        <p className='py-1'>{product.description}</p>
        <p>Rating : {product.rating}</p>
      </div>
    </div>
  );
};

export default Product;
