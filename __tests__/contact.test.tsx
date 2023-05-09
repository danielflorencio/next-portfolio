import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ContactSection from "../src/components/Contact";
import '@testing-library/jest-dom';

it('Renders the contact section.', () => {
    render(<ContactSection />);
});

it('does not show any message on the first load of the component.', () => {
    render(<ContactSection/>);
    expect(screen.queryByTestId('message-container-test')).not.toBeInTheDocument();
})

it('Shows a message when copying the Email to the Clipboard.', async () => {
    render(<ContactSection/>)
    const button = screen.getByRole('button')

    fireEvent.click(button);
    
    await waitFor(() => {
        expect(screen.queryByTestId('message-container-test')).toBeInTheDocument();
    })
})