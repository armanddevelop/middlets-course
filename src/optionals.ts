//nullish-coalescing
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? false,
    stock: stock ?? 10,
  };
};

const product1 = createProduct(1, false, 500);
console.log('product1 ', product1);
const product2 = createProduct(34, true);
console.log('product2 ', product2);
const product3 = createProduct(55);
console.log('product3 ', product3);
const product4 = createProduct(100, true, 0);
console.log('product ', product4);
