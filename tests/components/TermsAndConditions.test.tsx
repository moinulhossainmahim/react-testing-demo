import { render, screen } from '@testing-library/react';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';

describe('TermsAndConditions', () => {

  const renderComponent = () => {
    render(<TermsAndConditions />)

    return {
      heading: screen.getByRole('heading'),
      checkbox: screen.getByRole('checkbox'),
      button: screen.getByRole('button'),
    }
  }

  it('should render with correct text and initial state', () => {
    const { heading, button, checkbox } = renderComponent();

    expect(heading).toHaveTextContent('Terms & Conditions');
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  })

  it('should enable submit button when checkbox is checked', async () => {
    const { checkbox, button } = renderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  })
});
