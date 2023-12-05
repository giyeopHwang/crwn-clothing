import { describe, test, expect } from 'vitest';

import {
  selectCategories,
  selectIsLoading,
  selectCategoriesMap,
} from '../categories.selector';

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          { id: 1, name: 'Item A' },
          { id: 2, name: 'Item B' },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'test2',
        items: [
          { id: 3, name: 'Item C' },
          { id: 4, name: 'Item D' },
        ],
      },
    ],
  },
};

describe('Categories selector', () => {
  test('selectCategories should return categories data', () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test('selectIsLoading should return isLoading data', () => {
    const isLoading = selectIsLoading(mockState);
    expect(isLoading).toBeFalsy();
  });

  test('selectCategoriesMap should convert categories data into appropriate map', () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
      ],
      womens: [
        { id: 3, name: 'Item C' },
        { id: 4, name: 'Item D' },
      ],
    };
    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
