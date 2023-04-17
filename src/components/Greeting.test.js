import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const helloWorldEl = screen.getByText('Hello world');
    expect(helloWorldEl).toBeInTheDocument();
  });

  test('renders good to see you! if the button was NOT clicked', () => {
    render(<Greeting />);

    const paragraphelement = screen.getByText("It's good to see you!");
    expect(paragraphelement).toBeInTheDocument();
  });
  test('renders Changed here! if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphelement = screen.getByText('Changed here!');
    expect(paragraphelement).toBeInTheDocument();
  });

  test('does not render good to see you! if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const paragraphelement = screen.queryByText('good to see you!', {
      exact: false,
    });
    expect(paragraphelement).toBeNull();
  });
});
