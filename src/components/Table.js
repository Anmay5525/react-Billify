import React from "react";
import PropTypes from "prop-types";

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
          {data.map((el) => {
            return (
              <tr
                className="tr"
                key={JSON.stringify(el) + window.performance.now()}
              >
                {fields.map((field) => {
                  return (
                    <td
                      key={
                        JSON.stringify(el) +
                        JSON.stringify(field) +
                        window.performance.now()
                      }
                    >
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

Table.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.func,
        PropTypes.instanceOf(Date),
      ])
    )
  ).isRequired,
};

export default Table;
