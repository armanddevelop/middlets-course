import { CATEGORIESTYPES } from './categories/categories.model';
import { addProduct } from './products/product.service';
import { Product } from './products/product.model';

const singleProduct: Product = {
  id: 1,
  createAt: new Date(),
  updatedAt: new Date(),
  title: 'primer producto',
  stock: 10,
  size: 'M',
  category: {
    id: 1,
    createAt: new Date(),
    updatedAt: new Date(),
    name: 'paches',
    typeCategorie: CATEGORIESTYPES.KITCHEN,
  },
};

const result = addProduct(singleProduct);
