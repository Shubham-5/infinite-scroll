import InfiniteScroll from "react-infinite-scroll-component";
import Product from "./Product";

const Products = ({ products, fetchNext, hasMore }) => {
  return (
    <div className='my-8'>
      {products.length && (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchNext}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          hasMore={hasMore}
          loader={hasMore ? <h4>Loading...</h4> : <h4>No more items left</h4>}>
          <div className='flex flex-wrap gap-12'>
            {products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Products;
