import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import AppInput from '@/components/AppInput';

const props = {
  title: 'Message',
  placeholder: 'Enter the message...',
  modelValue: '',
  error: '',
};

const factory = (props) =>
  render(AppInput, {
    props,
  });

describe('AppInput.vue', () => {
  test('renders properly', () => {
    const wrapper = factory(props);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('checks input event', () => {
    const wrapper = factory(props);
    const input = wrapper.getByPlaceholderText('Enter the message...');
    fireEvent.change(input, { target: { value: 'New message' } });

    expect(input.value).toBe('New message');
  });

  test('renders error element', () => {
    props.error = 'Error occurred';
    const wrapper = factory(props);

    expect(wrapper.getByText('Error occurred'));
  });

  test('renders red label text', () => {
    props.error = 'Error occurred';
    const wrapper = factory(props);

    expect(wrapper.getByTestId('label')).toHaveClass('error-label');
  });

  test('renders red border around input', () => {
    props.error = 'Error occurred';
    const wrapper = factory(props);
    const input = wrapper.getByPlaceholderText('Enter the message...');

    expect(input).toHaveClass('error-input');
  });
});
