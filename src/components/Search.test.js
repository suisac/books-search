import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';

test('renders search component', () => {
  render(<Search setSearchText={() => {}} />);

  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  expect(screen.getByText('Go')).toBeInTheDocument();
});

test('calls setSearchText function on button click', () => {
  const setSearchTextMock = jest.fn();
  render(<Search setSearchText={setSearchTextMock} />);

  fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'test input' } });

  fireEvent.click(screen.getByText('Go'));

  expect(setSearchTextMock).toHaveBeenCalledWith('test+input');
});