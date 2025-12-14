import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";




describe("MyAwesomeApp", () => {
    test("should render first  and lastname ", () => {
        const {container} = render(<MyAwesomeApp />);
        screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('David');
        expect(h3?.innerHTML).toContain('Sánchez');
    });

    test("should match with the snapshot", () => {
        const {container} = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });
    
});

