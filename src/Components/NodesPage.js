import React, { useState, useEffect } from "react";
import { getNodes } from "../api/nodeApi";
import NodesList from "./NodesList";
import { Link } from "react-router-dom";

function NodesPage() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    getNodes().then(_nodes => setNodes(_nodes));
  }, []);

  return (
    <>
      <h2>Nodes</h2>
      <Link className="btn btn-primary" to="/node">
        Add Course
      </Link>
      <NodesList nodes={nodes} />
    </>
  );
}

export default NodesPage;
