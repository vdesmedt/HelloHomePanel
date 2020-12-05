import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function NodeForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        onChange={props.onChange}
        name="name"
        value={props.node.name}
        error={props.errors.name}
      />

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <div className="field">
          <select
            id="nodeType"
            onChange={props.onChange}
            name="nodeType"
            value={props.node.nodeType}
            className="form-control"
          >
            <option value="" />
            <option value="1">HelloNergie</option>
            <option value="2">HelloJulo</option>
          </select>
        </div>
        {props.errors.nodeType && (
          <div className="alert alert-danger">{props.errors.nodeType}</div>
        )}
      </div>

      <TextInput
        onChange={props.onChange}
        id="signature"
        label="Signature"
        name="signature"
        value={props.node.signature}
        error={props.errors.signature}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

NodeForm.prototype = {
  node: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default NodeForm;
