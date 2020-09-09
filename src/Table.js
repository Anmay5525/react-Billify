const Table = ({ fields, data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          {fields.map((el) => {
            return <th>{el.toUpperCase()}</th>;
          })}
        </thead>
        {data.map((el) => {
          return (
            <tr class="tr">
              {fields.map((el1) => {
                if (el1 === "amount") {
                  return <td>{el[el1] / 100}</td>;
                }
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
