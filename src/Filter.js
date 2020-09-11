export default function Filter({ handleChange }) {
  return (
    <div>
      <input
        autoFocus
        className="filter-input"
        type="text"
        onChange={handleChange}
      ></input>
    </div>
  );
}
