import { render } from "@testing-library/react";
import ResultContent from "components/UI/organisms/ResultContent";
import { MyResult } from "interfaces/MyTypes";

describe("resulltContent테스트", () => {
    test("파일넘김테스트:", () => {
        render(<ResultContent />);
        const mockFn = jest.fn();
        const mockInput: MyResult = {};
        mockFn.mockReturnValue(mockInput);
    });
});
