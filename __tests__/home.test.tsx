import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';
 
it('Renders the homepage.', () => {
  render(<Home/>)
});

describe('App', () => {

  render(<Home/>)

  it('should navigate to the Services section when Services link is clicked', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Skills'));
    expect(screen.getByText("These are the technologies I've been specializing in.")).toBeVisible();
  });

  it('should navigate to the About section when About link is clicked', () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Projects"));
    expect(screen.getByText("Take a look at some of the projects I've made.")).toBeVisible();
  });


  it('should navigate to the Contact section when Contact link is clicked', () => {
    render(<Home />);
    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByText("You are just a few clicks away from finding your team's newest Web Developer.")).toBeVisible();
  });
});