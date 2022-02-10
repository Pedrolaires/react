import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { TextInput } from '.';



describe('<TextInput />', () => {
  it('should have a value of "value"', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'test'} />);

    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input.value).toBe('test')
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const typedValue = 'value';

    userEvent.type(input, typedValue);

    expect(input.value).toBe(typedValue);
    expect(fn).toHaveBeenCalledTimes(typedValue.length);

    input.value = '';
    expect(input.value).toBe('');
    expect(fn).toHaveBeenCalledTimes(typedValue.length);
  });

  it('should match snapshot', () => {
    const { container } = render(<TextInput />)

    expect(container).toMatchSnapshot();
  });
}) 