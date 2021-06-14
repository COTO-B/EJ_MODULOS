//EXPORTING MODULE
console.log("exporting module");

//las variables con privadas de este modulo, no se pueden exportar
const shippingCost = 10;
export const cart = [];

//NOTE: name export/------------------------------
//para exportar a otro modulo. esto siempre debe estar en top level code, es decir no adentro de un if u otro code block
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//exportando varias variables. tambien puedo cambiar el nombre que esto exportando (as qt)
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

//NOTE: default export-------------------------
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
