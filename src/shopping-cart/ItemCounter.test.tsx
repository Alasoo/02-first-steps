import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe("ItemCounter", () => {

    /*
    test("should render with default values", () => {
        const name = 'test item';
        render(<ItemCounter name={name} />);

        expect(screen.getByText(name)).not.toBeNull();
    });

    test("should render with custom quantity", () => {
        const name = 'xbox';
        const quantity = 5;
        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(quantity)).not.toBeNull();
    });
    */

    test("should render when press button", () => {

        render(<ItemCounter name={'xbox'} />);
        const [buttonAdd] = screen.getAllByRole('button');
        //fireEvent.click(buttonAdd);

        //expect(screen.getByText('2')).not.toBeNull();

    });

});