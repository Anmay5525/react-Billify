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
                key={JSON.stringify(el) + new Date().getMilliseconds()}
              >
                {fields.map((field) => {
                  return (
                    <td
                      key={
                        JSON.stringify(el) +
                        JSON.stringify(field) +
                        new Date().getMilliseconds()
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
  fields: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;