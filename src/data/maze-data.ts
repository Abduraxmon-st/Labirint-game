export const moving = [
  {
    key: 1,
    row: 1,
    column: 1,
    type: "start"
  },
  {
    key: 2,
    row: 1,
    column: 2,
    type: "block"
  }
]


const mazetemplate = [
  {
    "key": 1,
    "row": 0,
    "column": 0,
    "canMove": [
      "bottom"
    ],
    "type": "start",
    "visited": true
  },
  {
    "key": 2,
    "row": 0,
    "column": 1,
    "canMove": [
      "bottom",
      "right"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 3,
    "row": 0,
    "column": 2,
    "canMove": [
      "left",
      "right"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 4,
    "row": 0,
    "column": 3,
    "canMove": [
      "left",
      "bottom"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 5,
    "row": 0,
    "column": 4,
    "canMove": [
      "right"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 6,
    "row": 0,
    "column": 5,
    "canMove": [
      "bottom",
      "right",
      "left"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 7,
    "row": 0,
    "column": 6,
    "canMove": [
      "left",
      "bottom"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 8,
    "row": 0,
    "column": 7,
    "canMove": [
      "right"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 9,
    "row": 0,
    "column": 8,
    "canMove": [
      "bottom",
      "right",
      "left"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 10,
    "row": 0,
    "column": 9,
    "canMove": [
      "left",
      "bottom"
    ],
    "type": "block",
    "visited": true
  },
  {
    "key": 11,
    "row": 1,
    "column": 0,
    "canMove": [
      "top",
      "bottom"
    ],
    "type": "block",
    "visited": true
  }
]