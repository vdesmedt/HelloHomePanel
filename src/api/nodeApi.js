import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/nodes/";

export function getNodes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getNodeById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(courses => {
        if (courses.length !== 1) throw new Error("Course not found: " + id);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveNode(node) {
  return fetch(baseUrl + (node.id || ""), {
    method: node.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...node,
      // Parse nodeType & signature to a number (in case it was sent as a string).
      nodeType: parseInt(node.nodeType, 10),
      signature: parseInt(node.signature, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteNode(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
