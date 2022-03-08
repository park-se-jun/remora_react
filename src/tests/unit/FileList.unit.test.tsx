import { render, screen } from "@testing-library/react";
import FileList from "components/UI/molecules/FileList";

test("renders learn react link", () => {
    render(<FileList />);
    const linkElement = screen.getByText();
});