import dispatcher from "../appDispatcher";
import * as nodeApi from "../api/nodeApi";
import actionTypes from "./actionTypes";

export function saveNode(node) {
  return nodeApi.saveNode(node).then(savedNode => {
    //Hey dispatcher, go tell all the stores that a node was created.
    dispatcher.dispatch({
      actionType: node.id ? actionTypes.UPDATE_NODE : actionTypes.CREATE_NODE,
      node: savedNode
    });
  });
}

export function loadNodes() {
  return nodeApi.getNodes().then(nodes => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_NODES,
      nodes: nodes
    });
  });
}

export function deleteNode(id) {
  return nodeApi.deleteNode(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_NODE,
      id: id
    });
  });
}
