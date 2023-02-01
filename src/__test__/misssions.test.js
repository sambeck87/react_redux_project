import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/mission/Mission';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

describe('Test for Mission component', () => {
  const output = {
    mission_id: 'F7709F2',
    mission_name: 'Eutelsat',
    description: 'Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world\'s third largest satellite operator in terms of revenues.',
    status: false,
  };

  it('renders Mission name without any error ', () => {
    render(<Provider store={store}><Mission mission={output} /></Provider>);
    expect(screen.getByText('Eutelsat')).toBeInTheDocument();
  });
});
