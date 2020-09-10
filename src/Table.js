const Table = ({ fields, data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {fields.map((el) => {
              return (
                <th key={JSON.stringify(el)}>
                  {el.toUpperCase().replace("_", " ")}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((el, j) => {
            return (
              <tr className="tr" key={JSON.stringify(el) + j}>
                {fields.map((field, i) => {
                  return (
                    <td key={JSON.stringify(el) + JSON.stringify(field) + i}>
                      {el[field]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
