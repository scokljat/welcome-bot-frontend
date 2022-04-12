import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import AppAlert from '@/components/AppAlert';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      alert: {
        active: true,
        success: false,
        message: 'Error message',
      },
    };
  },
  getters: {
    getAlert(state) {
      return state.alert;
    },
  },
});

store.commit = jest.fn();

const factory = (props) =>
  render(AppAlert, {
    props,
    global: {
      plugins: [store],
    },
  });

describe('AppAlert.vue', () => {
  test('renders properly', () => {
    const wrapper = factory();

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders error message', () => {
    const wrapper = factory();

    expect(wrapper.getByText('Error message'));
  });

  test('renders errors alert icon', () => {
    const wrapper = factory();

    expect(wrapper.getByTestId('icon')).toHaveClass(
      'fa-solid fa-circle-exclamation'
    );
  });

  test('renders success alert icon', () => {
    store.state.alert.success = true;
    const wrapper = factory();

    expect(wrapper.getByTestId('icon')).toHaveClass('fa-solid fa-circle-check');
  });
});
