import {render} from "@testing-library/react";
import AddPanelMember from './AddPanelMember';

describe("Button Component", () => {
    it("rendered button", () => {
        const { getByTestId } = render(<AddPanelMember/>);
        const button = getByTestId("buttonsubmit");
        expect(button).toBeTruthy();
    });
});

describe("Reset Button Component", () => {
    it("rendered button", () => {
        const { getByTestId } = render(<AddPanelMember/>);
        const button = getByTestId("buttonreset");
        expect(button).toBeTruthy();
    });
});

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<AddPanelMember/>);
        const input = getByTestId("groupidtest");
        expect(input).toBeTruthy();
    });
});

