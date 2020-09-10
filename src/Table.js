const Table = ({ fields, data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          {fields.map((el) => {
            return <th>{el.toUpperCase().replace("_", " ")}</th>;
          })}
        </thead>
        {data.map((el) => {
          return (
            <tr class="tr">
              {fields.map((el1) => {
                return <td>{el[el1]}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
