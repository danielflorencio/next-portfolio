import { render, fireEvent, getByTestId, getByLabelText, screen, waitFor, act } from "@testing-library/react";
import ContactSection from "../src/components/Contact";
import '@testing-library/jest-dom';
// import { setTimeout } from "timers/promises";

it('Renders the contact section.', () => {
    render(<ContactSection />);
});

it('does not show any message on the first load of the component.', () => {
    render(<ContactSection/>);
    expect(screen.queryByText("My email contact has been copied to the clipboard.")).not.toBeInTheDocument();
})

it('Shows a message when copying the Email to the Clipboard.', async () => {
    // const { queryByText, getByText, findByText, rerender} = render(<ContactSection/>)
    const { queryByText , getByText, getByLabelText, queryByLabelText, getByRole, debug, findByText, rerender} = render(<ContactSection/>)
    const button = screen.getByRole('button')

    console.log('HERE IS THE BUTTON: ', button)
    fireEvent.click(button);
    
    // document.execCommand = jest.fn();
    // console.log('button: ', button)
    // rerender(<ContactSection/>)
    // setTimeout(1000);
    // const message = await queryByText("My email contact has been copied to the clipboard.");
    // await expect(message).toBeInTheDocument();
    // await expect(queryByText("My email contact has been copied to the clipboard.")).toBeInTheDocument();
    // rerender(<ContactSection/>);

    const phraseOne = /My email contact has been copied to the clipboard./i; // Use a regular expression to match phraseOne
    const phraseTwo = /Couldn't copy the email to the clipboard./i; // Use a regular expression to match phraseTwo

    await waitFor(() => {
    // expect(screen.queryByText("clipboard")).toBeInTheDocument();
    // expect(screen.queryByText(phraseTwo)).toBeInTheDocument();
    // expect(screen.queryByLabelText('message-container')).toHaveTextContent(phraseTwo);
    expect(screen.queryByTestId('message-container-test')).toHaveTextContent(phraseTwo || phraseOne);
    })
    // debug();
})

// it('Shows a message when copying the Email to the Clipboard.', async () => {
//     render(<ContactSection/>);
//     const button = screen.getByLabelText('email');
  
//     fireEvent.click(button);
  
//     await act(async () => {
//       await setTimeout(1000);
//     });
  
//     expect(screen.findByText("My email contact has been copied to the clipboard.")).toBeInTheDocument();
// });