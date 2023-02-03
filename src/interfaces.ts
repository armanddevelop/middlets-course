type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
interface Product {
  id: userId;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}
const product: Product[] = [];

const addProduct = (data: Product) => {
  product.push(data);
};
product.push({
  id: 1,
  title: 'primer producto',
  createAt: new Date(),
  stock: 10,
  size: 'M',
});
