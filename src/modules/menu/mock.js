export const categories = [
  { id: 0, title: "Classic", amount: 2 },
  { id: 1, title: "Season", amount: 3 },
  { id: 2, title: "Test category", amount: 3 }
]

export const positions = [
  {
    id: 0, catID: 0, title: "Americano", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
    ]
  },
  {
    id: 1, catID: 0, title: "Cappucino", options: [
      { id: 1, value: "250ml", price: "150rub" },
      { id: 2, value: "350ml", price: "180rub" },
      { id: 3, value: "450ml", price: "220rub" },
    ]
  },
  {
    id: 2, catID: 1, title: "Season position 1", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
      { id: 3, value: "350ml", price: "250rub" },
    ]
  },
  {
    id: 3, catID: 1, title: "Season position 2", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
      { id: 3, value: "350ml", price: "250rub" },
    ]
  },
  {
    id: 4, catID: 1, title: "Season position 3", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
      { id: 3, value: "350ml", price: "250rub" },
    ]
  },
  {
    id: 5, catID: 2, title: "Test position 1", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
      { id: 3, value: "350ml", price: "250rub" },
    ]
  },
  {
    id: 6, catID: 2, title: "Test position 2", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
      { id: 3, value: "350ml", price: "250rub" },
    ]
  },
  {
    id: 7, catID: 2, title: "Test position 3", options: [
      { id: 1, value: "200ml", price: "150rub" },
      { id: 2, value: "250ml", price: "180rub" },
      { id: 3, value: "350ml", price: "250rub" },
    ]
  },
]