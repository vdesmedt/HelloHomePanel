const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const zones = [
  {
    id: 1,
    name: "firstFloor",
    parentZoneId: null
  },
  {
    id: 2,
    name: "bureau",
    parentZoneId: 1
  },
  {
    id: 3,
    name: "salon",
    parentZoneId: 1
  },
  {
    id: 4,
    name: "cuisine",
    parentZoneId: null
  },
  {
    id: 5,
    name: "salle à manger",
    parentZoneId: null
  },
  {
    id: 6,
    name: "grenier",
    parentZoneId: null
  },
  {
    id: 7,
    name: "cave",
    parentZoneId: null
  }
];

const nodes = [
  {
    id: 1,
    name: "Compteurs grenier",
    zoneId: 6,
    signature: 3417448591193826519,
    rfAddress: 45,
    nodeType: 1,
    version: "1.0",
    lastSeen: "2020-02-16T09:27:55.485658",
    config: { extraFeatures: 1, nodeInfoFreq: 20, envFreq: 10 }
  },
  {
    id: 2,
    name: "Compteurs cave",
    zoneId: 7,
    signature: 3217573784642675671,
    rfAddress: 54,
    nodeType: 1,
    version: "1.0",
    lastSeen: "2020-01-27 08:27:49.964188",
    config: { extraFeatures: 1, nodeInfoFreq: 20, envFreq: 10 }
  }
];

const ports = [];

const envHistory = {
  nodeId: 1,
  envHistory: [
    {
      day: {
        date: "2020-01-27",
        data: [
          { ts: "08:27:49", t: 23.1, h: 39.6, p: 1011.2 },
          { ts: "08:27:55", t: 23.2, h: 40.1, p: 1011.1 },
          { ts: "08:28:00", t: 23.1, h: 40.2, p: 1011.3 }
        ]
      }
    },
    {
      day: {
        date: "2020-01-28",
        data: [
          { ts: "08:27:49", t: 23.1, h: 39.6, p: 1011.2 },
          { ts: "08:27:55", t: 23.2, h: 40.1, p: 1011.1 },
          { ts: "08:28:00", t: 23.1, h: 40.2, p: 1011.3 }
        ]
      }
    }
  ]
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  zones,
  newCourse,
  courses,
  authors,
  nodes,
  ports,
  envHistory
};
