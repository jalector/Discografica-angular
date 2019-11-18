import { Album } from './Album.model';

/**
 * @author Juda Alector
 * @description Clase que se encarga de tener el carrito de compra de la aplica-
 * cion.
 *  
 *      > Agregar item
 *      > Aumentar la cantidad del item
 *      > Eliminar item 
 * 
 */
export class Cart {
    private static cart: Cart;

    private key: string = "CART_KEY";
    private items: CartItem[] = [];

    public static getInstance(): Cart {
        if (Cart.cart == null) {
            Cart.cart = new Cart();
        }

        return Cart.cart;
    }

    private constructor() {
        let cart = sessionStorage.getItem(this.key);

        if (cart == null) {
            sessionStorage.setItem(this.key, "[]");
        } else {

        }
    }


    public add() {

    }


}


export interface CartItem {
    item: Album,
    amount: number,
    date: Date
}