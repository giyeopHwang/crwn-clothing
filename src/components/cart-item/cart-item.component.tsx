import { FC, memo } from 'react';

import { CategoryItem } from '../../store/categories/categories.types';

import {
  CartItemContainer,
  CartItemImg,
  ItemDetails,
  Name,
} from './cart-item.styles';

export type CartItemProps = {
  cartItem: CategoryItem & { quantity: number };
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">{`${quantity} x $${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
