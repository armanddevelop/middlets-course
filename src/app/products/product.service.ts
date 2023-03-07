import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './products.DTO';
import { CATEGORIESTYPES } from '../categories/categories.model';

export const products: Product[] = [];

export const getAllProducts = (): Product[] => products;

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      name: faker.commerce.productName(),
      typeCategorie: faker.helpers.arrayElement([
        CATEGORIESTYPES.HOME,
        CATEGORIESTYPES.KITCHEN,
        CATEGORIESTYPES.PET,
      ]),
    },
    ...data,
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  idProduct: Product['id'],
  changes: UpdateProductDto
): Product => {
  const idxProduct = products.findIndex(({ id }) => id === idProduct);
  const prevData = products[idxProduct];
  return (products[idxProduct] = {
    ...prevData,
    ...changes,
  });
};

export const getProductById = (idProduct: string): Product[] =>
  products.filter(({ id }) => id === idProduct);

export const findProducts = (productDto: FindProductDto): Product[] => {
  //productDto.color = 'blue';
  //productDto.isNew = false;
  //productDto.tags?.push('test');
  return products;
};

export const deleteProductById = (idProduct: string) => {
  const idxProduct = products.findIndex(({ id }) => id === idProduct);
  products.splice(idxProduct, 1);
};
