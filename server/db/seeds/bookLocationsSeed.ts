export const bookLocationsSeed = [
  {
    id: "CB1",
    title: "Cabinet",
    data: {
      "title": "hello cabinet",
      "description": "big ass cabinet",
      "size": "8x4",
    },
    parent_id: null
  },
  {
    id: "SHF1",
    title: "Shelf 1",
    data: {
      "title": "shelf 1",
      "description": "big ass shelf",
      "size": "4x4",
    },
    parent_id: {
      "1": "CB1"
    }
  },
  {
    id: "3",
    title: "Shelf 2",
    data: {
      "title": "shelf 2",
      "description": "big ass shelf",
      "size": "4x4",
    },
    parent_id: {
      "1": "CB1"
    }
  },
  {
    id: "4",
    title: "Folder 123",
    data: {
      "title": "All debts",
      "description": "Please pay your debt",
      "size": "4x4",
    },
    parent_id: {
      "1": "CB1",
      "2": "SHF1"
    }
  }
]
