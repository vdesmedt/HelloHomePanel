import React, { useState, useEffect } from "react";
import NodeForm from "./NodeForm";
import * as nodeApi from "../api/nodeApi";
import { toast } from "react-toastify";

function ManageNodePage(props) {
  const [errors, setErrors] = useState({});
  const [node, setNode] = useState({
    id: null,
    name: "",
    nodeType: "",
    signature: ""
  });

  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      nodeApi.getNodeById(id).then(_node => setNode(_node));
    }
  }, [props.match.params.id]);

  function handleChange({ target }) {
    setNode({ ...node, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    nodeApi.saveNode(node).then(() => {
      props.history.push("/nodes");
      toast.success("Node saved");
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!node.name) _errors.name = "Name is requried";
    if (!node.nodeType) _errors.nodeType = "Type is requried";
    if (!node.signature) _errors.signature = "Signature is requried";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h2>Manage Node</h2>
      <NodeForm
        node={node}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageNodePage;
