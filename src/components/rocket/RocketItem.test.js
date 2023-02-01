import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RocketItem from './RocketItem';

describe('RocketItem', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 1,
      rocketName: 'Falcon 9',
      description: 'A two-stage-to-orbit medium lift launch vehicle',
      image: 'falcon9.jpg',
      reserved: false,
      handleRocket: jest.fn(),
    };
  });

  test('should render correctly with all props', () => {
    const component = render(<RocketItem {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('should render the correct rocket name', () => {
    render(<RocketItem {...props} />);
    const element = screen.getByTestId('name').textContent;
    expect(element).toEqual('Falcon 9');
  });

  test('should render the correct button text when reserved is false', () => {
    render(<RocketItem {...props} />);
    const element = screen.getByTestId('button').textContent;
    expect(element).toEqual('Reserve Rocket');
  });

  test('should render the correct button text when reserved is true', () => {
    props.reserved = true;
    render(<RocketItem {...props} />);

    const element = screen.getByTestId('button').textContent;
    expect(element).toEqual('Cancel Reservation');
  });

  test('should call handleRocket when button is clicked', () => {
    render(<RocketItem {...props} />);
    const element = screen.getByTestId('button');
    fireEvent.click(element);
    expect(props.handleRocket).toHaveBeenCalledWith(1);
  });
});
