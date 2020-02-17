import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NodesList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Signature</th>
          <th>RfAddress</th>
        </tr>
      </thead>
      <tbody>
        {props.nodes.map(node => {
          return (
            <tr key={node.id}>
              <td>
                <Link to={"/node/" + node.id}>{node.name}</Link>
              </td>
              <td>{node.signature}</td>
              <td>{node.rfAddress}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

NodesList.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      signature: PropTypes.number.isRequired,
      rfAddress: PropTypes.number.isRequired
    })
  ).isRequired
};

export default NodesList;
