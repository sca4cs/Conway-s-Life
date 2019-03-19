import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        const helpers = render(<App />);
        // console.log(helpers)
    });

    it('renders "cellular automaton"', () => {
        const { getByText } = render(<App />);

        const text = getByText(/cellular automaton/i);

        expect(text).toBeInTheDocument();
    });
});