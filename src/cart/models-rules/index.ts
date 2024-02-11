import { ICart, ICartItem } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: ICart): number {
  return cart
    ? cart.items.reduce(
        (acc: number, { product: { price }, count }: ICartItem) => {
          return (acc += price * count);
        },
        0,
      )
    : 0;
}
