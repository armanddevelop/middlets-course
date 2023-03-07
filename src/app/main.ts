import { faker } from '@faker-js/faker';
import { UpdateProductDto } from './products/products.DTO';
import {
  addProduct,
  getAllProducts,
  updateProduct,
  getProductById,
  deleteProductById,
  findProducts,
} from './products/product.service';
const editData: UpdateProductDto = {
  categoryId: faker.datatype.uuid(),
  color: 'brown',
  price: 22,
  title: 'nuevo producto editado',
};
for (let idx = 0; idx <= 50; idx++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 5, max: 100 }),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    categoryId: faker.datatype.uuid(),
  });
}
const getProducts = getProductById(getAllProducts()[50].id as string);
console.log('esto vale getProduct ', getProducts);

const editedProduct = updateProduct(
  getAllProducts()[50].id as string,
  editData
);
console.log('esto vale editedProduct ', editedProduct);

const responseProducts = findProducts({
  title: 'p1',
  color: 'red',
  stock: 10,
  tags: ['as', 'asd', 'wasd'],
});

deleteProductById(getAllProducts()[0].id as string);
console.log(
  'esto vale products despues de elimnar un prodcuto ',
  getAllProducts().length
);
