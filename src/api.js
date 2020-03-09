const products = [
  {
    id: 1,
    title: 'Yellow coat',
    stock: { m: 5, l: 8, xl: 4 },
  },
  {
    id: 2,
    title: 'Blue coat',
    stock: { m: 12, l: 7, xl: 6 },
  },
];

export const getProductList = () => (
  products.map(({ id, title }) => ({
    id,
    title,
  }))
);

export const getProductDetails = (id) => (
  products.find((product) => product.id === id)
);
