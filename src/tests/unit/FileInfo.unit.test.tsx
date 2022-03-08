import { render, screen } from "@testing-library/react";
import FileList from "components/UI/molecules/FileList";

describe("파일 테스트", () => {
    test("파일 넣었을때 제대로 랜더링 되는가?", () => {
        render(<FileList />);
    });
});
