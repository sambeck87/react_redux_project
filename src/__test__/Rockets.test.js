import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../pages/Rockets';

describe('Rockets', () => {
  test('renders Rockets Page without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });

  test('renders Rockets Page without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    )
    container.querySelector('.rocket-name')
    expect(container.firstChild).toMatchSnapshot()

    container.querySelector('.rocket-detail')
    expect(container.firstChild).toMatchSnapshot()
  });
});
