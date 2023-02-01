import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import dragonReducer, {
  reserve,
  cancelReserve,
} from '../redux/dragons/Dragons';
import store from '../redux/configureStore';
import Dragon from '../components/dragons/Dragon';

const apiResponseData = {
  type: 'react_redux_project/dragons/GET_DATA/fulfilled',
  payload: [
    {
      id: 'dragon1',
      name: 'Dragon 1',
      type: 'capsule',
      images: [
        'https://i.imgur.com/9fWdwNv.jpg',
        'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
        'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
        'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
      ],
      reserved: false,
    },
    {
      id: 'dragon2',
      name: 'Dragon 2',
      type: 'capsule',
      images: [
        'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
        'https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg',
        'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg',
      ],
      reserved: false,
    },
  ],
  meta: {
    requestId: 'tVjD3u6X5JyFY7lUZ0O-A',
    requestStatus: 'fulfilled',
  },
};

describe('Dragon Reducer Unit tests', () => {
  test('Should return the initial state', () => {
    expect(dragonReducer(undefined, { type: undefined })).toEqual({
      dragons: [],
      loading: false,
    });
  });

  test('Should add api data to the new previous state', () => {
    const initialState = { dragons: [], loading: false };
    expect(dragonReducer(initialState, apiResponseData)).toEqual({
      dragons: [
        {
          id: 'dragon1',
          name: 'Dragon 1',
          type: 'capsule',
          images: [
            'https://i.imgur.com/9fWdwNv.jpg',
            'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
            'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
            'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
          ],
          reserved: false,
        },
        {
          id: 'dragon2',
          name: 'Dragon 2',
          type: 'capsule',
          images: [
            'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
            'https://farm1.staticflickr.com/780/21119686299_c88f63e350_b.jpg',
            'https://farm9.staticflickr.com/8588/16661791299_a236e2f5dc_b.jpg',
          ],
          reserved: false,
        },
      ],
      loading: false,
    });
  });

  test('Should reserve change reserved status to true', () => {
    const initialState = {
      dragons: [
        {
          id: 'dragon1',
          name: 'Dragon 1',
          type: 'capsule',
          images: [
            'https://i.imgur.com/9fWdwNv.jpg',
            'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
            'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
            'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
          ],
          reserved: false,
        },
      ],
      loading: false,
    };
    expect(dragonReducer(initialState, reserve('dragon1'))).toEqual({
      dragons: [
        {
          id: 'dragon1',
          name: 'Dragon 1',
          type: 'capsule',
          images: [
            'https://i.imgur.com/9fWdwNv.jpg',
            'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
            'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
            'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
          ],
          reserved: true,
        },
      ],
      loading: false,
    });
  });
  test('Should reserve change reserved status to false', () => {
    const initialState = {
      dragons: [
        {
          id: 'dragon1',
          name: 'Dragon 1',
          type: 'capsule',
          images: [
            'https://i.imgur.com/9fWdwNv.jpg',
            'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
            'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
            'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
          ],
          reserved: true,
        },
      ],
      loading: false,
    };
    expect(dragonReducer(initialState, cancelReserve('dragon1'))).toEqual({
      dragons: [
        {
          id: 'dragon1',
          name: 'Dragon 1',
          type: 'capsule',
          images: [
            'https://i.imgur.com/9fWdwNv.jpg',
            'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
            'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
            'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
          ],
          reserved: false,
        },
      ],
      loading: false,
    });
  });
});

describe('Component render tests', () => {
  test('Renders Dragons page correctly', () => {
    const dragonProps = {
      id: 'dragon1',
      name: 'Dragon 1',
      type: 'capsule',
      images: [
        'https://i.imgur.com/9fWdwNv.jpg',
        'https://live.staticflickr.com/8578/16655995541_7817565ea9_k.jpg',
        'https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg',
        'https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg',
      ],
      reserved: false,
    };

    render(
      <Provider store={store}>
        <Dragon
          id={dragonProps.id}
          name={dragonProps.name}
          image={dragonProps.images[0]}
          type={dragonProps.type}
          reserved={dragonProps.reserved}
        />
      </Provider>,
    );
    expect(screen.getByText('Dragon 1')).toBeInTheDocument();
  });
});
