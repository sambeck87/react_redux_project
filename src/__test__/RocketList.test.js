import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RocketList from '../components/rocket/RocketList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('RocketList Component', () => {
  let tree;

  beforeEach(() => {
    const rocketList = [{
      id: 1, rocketName: 'Falcon 9', description: 'A two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.', images: [], reserved: false,
    }];

    useSelector.mockImplementation(() => rocketList);

    tree = render(<RocketList />);
  });

  test('should render correctly', () => expect(tree).toMatchSnapshot());
});
