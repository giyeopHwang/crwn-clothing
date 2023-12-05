import { describe, test, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import ProductCard from '../product-card.component';

describe('Product Card tests', () => {
  test('it should add the product item when Product Card button is clicked', () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: 'Item A',
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    fireEvent.click(addToCartButtonElement);
    expect(store.getState().cart.cartItems).toEqual([
      {
        id: 1,
        imageUrl: 'test',
        name: 'Item A',
        price: 10,
        quantity: 1,
      },
    ]);
  });
});
