function Filter({ filter, setFilter }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
      placeholder="Search contact"
    />
  );
}

export default Filter;