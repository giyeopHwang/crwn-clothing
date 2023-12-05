import { vi, describe, afterEach, test, expect } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test/test.utils';
import Category from '../category.component';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({
      category: 'mens',
    }),
  };
});

describe('Category tests', () => {
  afterEach(() => {
    cleanup();
  });
  test('should render a Spinner if isLoading is true', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeDefined();
  });

  test('should render products if isLoading is false and there are items present', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: 'mens',
              items: [
                { id: 1, name: 'Item A' },
                { id: 2, name: 'Item B' },
              ],
            },
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId('spinner');
    expect(spinnerElement).toBeNull();

    const itemAElement = screen.getByText(/item a/i);
    const itemBElement = screen.getByText(/item b/i);
    expect(itemAElement).toBeDefined();
    expect(itemBElement).toBeDefined();
  });
});
