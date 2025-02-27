import { render, screen } from "@testing-library/react";
import Footer from './Footer';

test('Coder link', () => {
    render(<Footer />);
    const linCoderElement = screen.getByTestId(/coder-link/);
    expect(linCoderElement.href).toContain('https://github.com/monashperera');
});