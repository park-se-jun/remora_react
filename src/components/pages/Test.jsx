import BasicButton from "components/UI/atoms/BasicButton";
import mockData from "data/mockData";
import { Link } from "react-router-dom";

function Test() {
    return (
        <>
            {console.log(mockData)}
            <BasicButton
                text="result에 prop 전달"
                to="/extract/result"
                state={{
                    res: mockData,
                }}
                component={Link}
            />
            <BasicButton
                text="result에 prop 전달 X"
                to="/extract/result"
                component={Link}
            />
        </>
    );
}
export default Test;
