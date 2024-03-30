import { render } from '@testing-library/react';
import Footer from './Footer';


test('footer renders correctly with contact information and links', () => {
  const { getByText } = render(<Footer />);
  
  // Check if essential elements are rendered
  expect(getByText('Hotelzz')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();

  // Check if contact information is displayed
  expect(getByText('123 Road')).toBeInTheDocument();
  expect(getByText('Abiel')).toBeInTheDocument();
  expect(getByText('291-768-55')).toBeInTheDocument();

  // Check if footer links are rendered
  expect(getByText('Our Story')).toBeInTheDocument();
  expect(getByText('Get in Touch')).toBeInTheDocument();
  expect(getByText('Our Privacy Commitment')).toBeInTheDocument();
  expect(getByText('Terms of service')).toBeInTheDocument();
  expect(getByText('Customer Assistance')).toBeInTheDocument();
  expect(getByText('Dining Experience')).toBeInTheDocument();
  expect(getByText('Wellness')).toBeInTheDocument();
  expect(getByText('Fitness')).toBeInTheDocument();
  expect(getByText('Sports')).toBeInTheDocument();
  expect(getByText('Events')).toBeInTheDocument();
});
