import { Link } from "react-router-dom";
import BasicButton from "../atoms/BasicButton";

const style = {
    bgcolor: "secondary.dark",
    p: 3,
    borderRadius: 4,
    fontWeight: "fontWeightBold",
    maxWeight: "300px",
    minWeight: "300px",
};

function LinkToExtractButton() {
    return (
        <BasicButton sx={style} to="/extract" size="large" component={Link}>
            {"동영상속 텍스트를 추출하러 가기 ->"}
        </BasicButton>
    );
}
export default LinkToExtractButton;
