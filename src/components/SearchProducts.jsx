const SearchProducts = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className='my-4'>
      <form onSubmit={handleSearch}>
        <input
          className='px-3 py-2 text-sm border'
          type='text'
          placeholder='search products..'
          value={searchText}
          onChange={(e) => handleSearch(e)}
        />
      </form>
    </div>
  );
};

export default SearchProducts;
