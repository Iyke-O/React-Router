function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        placeholder="Filter by rating..."
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
}

export default Filter;