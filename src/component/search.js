function Search({searchContactByName}) {
  return (
    <div className="searchContainer">
      <input
        onChange={(e) => searchContactByName(e.target.value)}
        type="text"
        placeholder="Search Products.."
      />
    </div>
  );
}

export default Search
