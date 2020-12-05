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
          <th>&nbsp;</th>
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
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteNode(node.id)}
                >
                  Delete
                </button>
              </td>
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
  ).isRequired,
  deleteNode: PropTypes.func.isRequired
};

export default NodesList;
