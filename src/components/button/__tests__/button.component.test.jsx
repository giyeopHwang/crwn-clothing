import { describe, afterEach, test, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('button tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render base button when nothing is passed', () => {
    render(<Button>BASE</Button>);
    const baseButtonElement = screen.getByRole('button');
    expect(baseButtonElement).toBeDefined();
  });

  test('should render google button when passed google button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>GOOGLE</Button>);
    const googleButtonElement = screen.getByRole('button');
    expect(googleButtonElement).toBeDefined();
  });

  test('should render inverted button when passed inverted button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>INVERTED</Button>);
    const invertedButtonElement = screen.getByRole('button');
    expect(invertedButtonElement).toBeDefined();
  });

  test('should be disabled if isLoading is true', () => {
    render(<Button isLoading={true}>LOADING</Button>);
    const loadingButtonElement = screen.getByRole('button');
    expect(loadingButtonElement).toHaveProperty('disabled');
  });
});
