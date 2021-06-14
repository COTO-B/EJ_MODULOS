// IMPORTING MODULE

//NOTE:--------------primera parte------------------------------
/*para ver esta parte dejar como comentarios todo el resto
//los import son parsed primero y se ejecuta primero que el codigo. todos los modulos son ejecutados en stric mode
import "./shoppingCart.js";
//importando varaibles y funciones de otro modulo. tambien le puedo cambiar el nombre
import { addToCart, tq, totalPrice as price } from "./shoppingCart.js";

console.log("importing module");

//esta es una variable del modulo shoppingCart, y esas variable son privadas de ese modulo, no lo puedo acceder
// console.log(shippingCost);

//llamando a una funcion de otro modulo
addToCart("bread", 5);

//llamando a variables de otro modulo
console.log(price, tq);
*/

//NOTE:--------------segunda parte------------------------------
//dejar como comentario la primera para que funcione la segunda.

//importando todo, se pone la inicial con mayus, y esto es guardado como un objeto.
import * as ShoppingCart from "./shoppingCart.js";

//accediendo a funcion y variables
ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);

//default exports
import add from "./shoppingCart.js";
add("pizza", 2);
add("apples", 4);

//como agregue productos al cart esto se actualiza en todos los modulos, es un live collections
console.log(ShoppingCart.cart);
