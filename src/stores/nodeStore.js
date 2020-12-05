import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _nodes = [];

class NodeStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getNodes() {
    return _nodes;
  }

  getNodeById(id) {
    debugger;
    return _nodes.find(node => node.id === id);
  }
}

const store = new NodeStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_NODE:
      _nodes.push(action.node);
      store.emitChange();
      break;
    case actionTypes.DELETE_NODE:
      _nodes = _nodes.filter(node => node.id !== parseInt(action.id, 10));
      store.emitChange();
      break;
    case actionTypes.LOAD_NODES:
      _nodes = action.nodes;
      store.emitChange();
      break;
    case actionTypes.UPDATE_NODE:
      _nodes = _nodes.map(node =>
        node.id === action.node.id ? action.node : node
      );
      store.emitChange();
      break;
    default:
    //nothing to do
  }
});

export default store;
