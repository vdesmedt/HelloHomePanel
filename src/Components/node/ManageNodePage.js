import React, { useState, useEffect } from "react";
import NodeForm from "./NodeForm";
import nodeStore from "./../../stores/nodeStore";
import * as nodeActions from "./../../actions/nodeActions";

import { toast } from "react-toastify";

function ManageNodePage(props) {
  const [errors, setErrors] = useState({});
  const [nodes, setNodes] = useState(nodeStore.getNodes());
  const [node, setNode] = useState({
    id: null,
    name: "",
    nodeType: "",
    signature: ""
  });

  useEffect(() => {
    nodeStore.addChangeListener(onChange);
    const id = parseInt(props.match.params.id);
    if (nodes.length === 0) {
      nodeActions.loadNodes();
    } else if (id) {
      setNode(nodeStore.getNodeById(id));
    }
    return () => nodeStore.removeChangeListener(onChange);
  }, [nodes.length, props.match.params.id]);

  function onChange() {
    setNodes(nodeStore.getNodes());
  }

  function handleChange({ target }) {
    setNode({ ...node, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    nodeActions.saveNode(node).then(() => {
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
