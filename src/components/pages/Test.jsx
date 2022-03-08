import BasicButton from "components/UI/atoms/BasicButton";
import mockData from "data/mockData";
import { Link } from "react-router-dom";

function Test() {
    console.log("이게 언제 호출되는지 파악하는 용도의 콘솔 로그 입니다.");
    return (
        <>
            {console.log(mockData)}
            <BasicButton
                to="/extract/result"
                state={{
                    res: mockData,
                }}
                component={Link}
            >
                result에 prop 전달
            </BasicButton>
            <BasicButton to="/extract/result" component={Link}>
                result에 prop 전달 X
            </BasicButton>
        </>
    );
}
export default Test;
