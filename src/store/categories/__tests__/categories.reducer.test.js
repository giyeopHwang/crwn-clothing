import { describe, test, expect } from 'vitest';

import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from '../categories.reducer';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../categories.action';

describe('Categories Reducer test', () => {
  test('fetchCategoriesStart', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });

  test('fetchCategoriesSuccess', () => {
    const mockData = [
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
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };

    expect(
      categoriesReducer(
        { ...CATEGORIES_INITIAL_STATE, isLoading: true },
        fetchCategoriesSuccess(mockData)
      )
    ).toEqual(expectedState);
  });

  test('fetchCategoriesFailed', () => {
    const mockError = new Error('Error fetching categories');

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };

    expect(
      categoriesReducer(
        { ...CATEGORIES_INITIAL_STATE, isLoading: true },
        fetchCategoriesFailed(mockError)
      )
    ).toEqual(expectedState);
  });
});
