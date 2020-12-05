import React, { useState, useEffect } from "react";
import nodeStore from "../../stores/nodeStore";
import NodesList from "./NodesList";
import { Link } from "react-router-dom";
import { loadNodes, deleteNode } from "./../../actions/nodeActions";

function NodesPage() {
  const [nodes, setNodes] = useState(nodeStore.getNodes());

  useEffect(() => {
    nodeStore.addChangeListener(onChange);
    if (nodeStore.getNodes().length === 0) loadNodes();
    return () => nodeStore.removeChangeListener(onChange); // Cleanup on UnMount
  }, []);

  function onChange() {
    setNodes(nodeStore.getNodes());
  }
  return (
    <>
      <h2>Nodes</h2>
      <Link className="btn btn-primary" to="/node">
        Add Course
      </Link>
      <NodesList nodes={nodes} deleteNode={deleteNode} />
    </>
  );
}

export default NodesPage;
