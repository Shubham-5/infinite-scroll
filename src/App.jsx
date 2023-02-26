import { useState, useEffect } from "react";
import Products from "./components/Products";
import SearchProducts from "./components/SearchProducts";

function App() {
  const [products, setProducts] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [limit, setLimit] = useState(10);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const fetchProducts = async () => {
    setLimit(() => limit + 10);
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await res.json();
    if (data) {
      setProducts(data.products);
    } else {
      sethasMore(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`
    );
    const data = await res.json();
    setProducts(data.products);
  };
  return (
    <div className='p-4 mx-8 '>
      <SearchProducts
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      <Products
        products={products}
        fetchNext={fetchProducts}
        hasMore={hasMore}
      />
    </div>
  );
}

export default App;
