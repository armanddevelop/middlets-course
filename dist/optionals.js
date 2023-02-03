"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
//nullish-coalescing
const createProduct = (id, isNew, stock) => {
    return {
        id,
        isNew: isNew !== null && isNew !== void 0 ? isNew : false,
        stock: stock !== null && stock !== void 0 ? stock : 10,
    };
};
exports.createProduct = createProduct;
const product1 = (0, exports.createProduct)(1, false, 500);
console.log('product1 ', product1);
const product2 = (0, exports.createProduct)(34, true);
console.log('product2 ', product2);
const product3 = (0, exports.createProduct)(55);
console.log('product3 ', product3);
const product4 = (0, exports.createProduct)(100, true, 0);
console.log('product ', product4);
